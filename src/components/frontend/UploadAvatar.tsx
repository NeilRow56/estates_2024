'use client'

import { Copy } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Pencil } from 'lucide-react'
import { useState } from 'react'
import FileInput from './fileUpload'
import Image from 'next/image'
import { Avatar } from '../ui/avatar'

const UploadAvatar = () => {
  const [image, setImage] = useState<File>()
  return (
    <div className="p-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Pencil className=" w-6 text-slate-400 transition-colors hover:text-primary" />
            <h3 className="pl-1">Edit</h3>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Avatar</DialogTitle>
            <DialogDescription>
              <FileInput
                className="mb-3"
                onChange={(e) => setImage((e as any).target.files[0])}
              />
              {image && (
                <Image
                  className="h-14 w-14 rounded-full "
                  alt="avatar"
                  width={24}
                  height={24}
                  src={URL.createObjectURL(image)}
                />
              )}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-4 sm:justify-end">
            <div className="flex items-center space-x-2">
              <Button type="submit" size="default" className="px-3">
                <span className="">Change Avatar</span>
              </Button>
            </div>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UploadAvatar
