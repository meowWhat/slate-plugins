import { getInlineTypes, SlatePlugin } from 'slate-plugins-core'
import { Transforms } from 'meow-slate'
import { ReactEditor } from 'meow-slate-react'
import { isBlockAboveEmpty } from '../../common/queries/isBlockAboveEmpty'
import { SlateDocumentFragment } from '../../common/types/SlateDocument.types'
import { deserializeHTMLToDocumentFragment } from './utils'

export interface WithDeserializeHTMLOptions {
  plugins?: SlatePlugin[]

  /**
   * Function called before inserting the deserialized html.
   * Default: if the block above is empty and the first fragment node type is not inline,
   * set the selected node type to the first fragment node type.
   */
  preInsert?: (fragment: SlateDocumentFragment) => SlateDocumentFragment

  /**
   * Function called to insert the deserialized html.
   * Default: {@link Transforms.insertFragment}.
   */
  insert?: (fragment: SlateDocumentFragment) => void
}

/**
 * Enables support for deserializing inserted content from HTML format to Slate format.
 */
export const withDeserializeHTML = ({
  plugins = [],
  ...options
}: WithDeserializeHTMLOptions = {}) => <T extends ReactEditor>(editor: T) => {
  const { insertData } = editor

  const {
    preInsert = (fragment) => {
      const inlineTypes = getInlineTypes(plugins)

      const firstNodeType = fragment[0].type as string | undefined

      // replace the selected node type by the first block type
      if (
        isBlockAboveEmpty(editor) &&
        firstNodeType &&
        !inlineTypes.includes(firstNodeType)
      ) {
        Transforms.setNodes(editor, { type: fragment[0].type })
      }

      return fragment
    },

    insert = (fragment) => {
      Transforms.insertFragment(editor, fragment)
    },
  } = options

  editor.insertData = (data: DataTransfer) => {
    const html = data.getData('text/html')

    if (html) {
      const { body } = new DOMParser().parseFromString(html, 'text/html')
      let fragment = deserializeHTMLToDocumentFragment({
        plugins,
        element: body,
      })

      fragment = preInsert(fragment)

      insert(fragment)
      return
    }

    insertData(data)
  }

  return editor
}
