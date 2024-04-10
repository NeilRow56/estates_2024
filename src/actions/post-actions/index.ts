'use server'

import { getUserById } from '@/data/user'
import { db } from '@/lib/db'
import { getUserId } from '@/lib/utils'

import {
  BookmarkSchema,
  CreateCommentSchema,
  CreatePostSchema,
  DeleteCommentSchema,
  DeletePostSchema,
  LikeSchema,
  UpdatePostSchema,
} from '@/schemas/posts'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import * as z from 'zod'

export const createPost = async (values: z.infer<typeof CreatePostSchema>) => {
  const userId = await getUserId()

  const validatedFields = CreatePostSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Post.',
    }
  }

  const { fileUrl, caption } = validatedFields.data

  try {
    await db.post.create({
      data: {
        caption,
        fileUrl,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })

    return { success: 'Successfully created post' }
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Post.',
    }
  }
}

export async function deletePost(formData: FormData) {
  const userId = await getUserId()

  const { id } = DeletePostSchema.parse({
    id: formData.get('id'),
  })

  const post = await db.post.findUnique({
    where: {
      id,
      userId,
    },
  })

  if (!post) {
    throw new Error('Post not found')
  }

  try {
    await db.post.delete({
      where: {
        id,
      },
    })
    revalidatePath('/dashboard')
    return { message: 'Deleted Post.' }
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Post.' }
  }
}
