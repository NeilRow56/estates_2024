import React, { useState } from 'react'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  lablText?: string
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const FileInput = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      children,
      className,
      lablText,
      onChange,
      onSelect,
      error,

      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = useState('')
    function fileChangedHandler(e: any) {
      const file = e.target.files[0]
      setFileName(file.name)
      onChange && onChange(e)
      onSelect && onSelect(e)
    }

    return (
      <div className={className}>
        {lablText && (
          <label
            className="mb-2 block text-xs text-gray-600 lg:text-sm xl:text-base"
            htmlFor="txt"
          >
            {lablText}
          </label>
        )}
        <label
          className={
            ' group  relative flex w-full  cursor-pointer rounded-md  border'
          }
        >
          <div
            className={` bg-primary-500 hover:bg-primary-700  hover:bg-gra hover:shadow-primary-600/75 inline-block  h-full rounded-l-md px-2  py-3 text-white shadow  shadow-violet-600/25 transition duration-500`}
          >
            <input
              className="hidden"
              ref={ref}
              onChange={(e) => fileChangedHandler(e)}
              {...props}
              type="file"
            />
            <h2 className="text-primary">Upload File</h2>
          </div>
          <span className="mx-2 mt-3">{fileName}</span>
        </label>
        {error && (
          <p className="animate-shake text-right text-red-600">{error}</p>
        )}
      </div>
    )
  }
)
FileInput.displayName = 'FileInput'
export default FileInput
