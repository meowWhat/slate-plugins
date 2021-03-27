import { ReactEditor } from 'meow-slate-react'
import { insertFile, insertImage } from '../transforms'
import { ImagePluginOptions } from '../types'

/**
 * Allows for pasting images from clipboard.
 * Not yet: dragging and dropping images, selecting them through a file system dialog.
 * @param options.type
 * @param options.uploadImage
 */
export const withFileUpload = (options?: ImagePluginOptions) => <
  T extends ReactEditor
>(
  editor: T
) => {
  const { insertData } = editor

  editor.insertData = (data: DataTransfer) => {

    const { files } = data

    if (!handleFileData(editor, files, options)) {
      insertData(data)
    }
  }

  return editor
}

export const handleFileData = (editor: ReactEditor, files: FileList, options?: ImagePluginOptions) => {
  if (files && files.length > 0) {

    for (const file of files) {
      const reader = new FileReader()
      if (file.type === '') {
        return
      }
      const [mime] = file.type.split('/')

      reader.addEventListener('load', async () => {
        if (!reader.result) {
          return
        }
        if (mime === 'image') {
          insertImage(editor, reader.result, file, options)
        } else {
          // 插入其他文件
          insertFile(editor, reader.result, file, options)
        }

      })

      reader.readAsDataURL(file)

    }
    return true
  }

  return false
}