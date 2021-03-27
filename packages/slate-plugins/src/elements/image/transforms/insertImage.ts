import { Editor, Path, Transforms } from 'slate'
import { setDefaults } from '../../../common/utils/setDefaults'
import { DEFAULTS_IMAGE, DEFAULTS_FILE } from '../defaults'
import { FileNode, ImageNode, ImagePluginOptions } from '../types'
import { getuid } from '../utils'

export const insertImage = (
  editor: Editor,
  url: string | ArrayBuffer,
  file: File,
  options?: ImagePluginOptions<'type' | 'uploadFile'>
) => {
  const { img } = setDefaults(options, DEFAULTS_IMAGE)
  const text = { text: '' }
  const uuid = getuid(16)

  const reload = options?.img?.uploadFile?.bind(undefined, url, file, uuid)

  const image: ImageNode = { type: img.type, url, children: [text], status: 'loading', uuid, reload, fileObj: { fileName: file.name, size: file.size } }
  const selectionPath = Editor.path(editor, editor.selection!)

  let insertPath = Path.next(selectionPath.slice(0, 2))

  Transforms.insertNodes(editor, image, {
    at: insertPath,
    select: true,
  })
}

export const insertFile = (
  editor: Editor,
  data: string | ArrayBuffer,
  fileObject: File,
  options?: ImagePluginOptions<'type' | 'uploadFile'>
) => {

  const { file } = setDefaults(options, DEFAULTS_FILE)

  const text = { text: '' }

  const uuid = getuid(16)

  const reload = options?.img?.uploadFile?.bind(undefined, data, fileObject, uuid)

  const fileNode: FileNode = { type: file.type, fileObj: { fileName: fileObject.name, size: fileObject.size }, children: [text], status: 'loading', uuid, reload }

  const selectionPath = Editor.path(editor, editor.selection!)

  let insertPath = Path.next(selectionPath.slice(0, 2))

  Transforms.insertNodes(editor, fileNode, {
    at: insertPath,
    select: true,
  })

}