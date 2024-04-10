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
import { FileState, MultiFileDropzone } from './MultiFileDropzone'
import { useEdgeStore } from '@/lib/edgestore'

const UploadAvatar = () => {
  const [image, setImage] = useState<File>()
  const [fileStates, setFileStates] = useState<FileState[]>([])
  const [fileUrls, setFileUrls] = useState<String[]>([])
  const { edgestore } = useEdgeStore()

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates)

      const fileState = newFileStates.find((fileState) => fileState.key === key)
      if (fileState) {
        fileState.progress = progress
      }
      return newFileStates
    })
  }

  console.log(fileUrls)
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
              {/* <FileInput
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
              )} */}

              <div className="  mt-8 flex  flex-col">
                <h2 className="mb-2 text-xl font-bold">Multi File Upload</h2>
                <div className="mx-auto">
                  <MultiFileDropzone
                    value={fileStates}
                    onChange={(files) => {
                      setFileStates(files)
                    }}
                    onFilesAdded={async (addedFiles) => {
                      setFileStates([...fileStates, ...addedFiles])
                      await Promise.all(
                        addedFiles.map(async (addedFileState) => {
                          try {
                            const res = await edgestore.publicFiles.upload({
                              file: addedFileState.file,
                              onProgressChange: async (progress) => {
                                updateFileProgress(addedFileState.key, progress)
                                if (progress === 100) {
                                  // wait 1 second to set it to complete
                                  // so that the user can see the progress bar at 100%
                                  await new Promise((resolve) =>
                                    setTimeout(resolve, 1000)
                                  )
                                  updateFileProgress(
                                    addedFileState.key,
                                    'COMPLETE'
                                  )
                                }
                              },
                            })
                            console.log(res)
                            setFileUrls((prevUrls) => [...prevUrls, res.url])
                          } catch (err) {
                            updateFileProgress(addedFileState.key, 'ERROR')
                          }
                        })
                      )
                    }}
                  />
                </div>
              </div>
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
