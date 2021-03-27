import { Editor } from 'meow-slate'
import { getText } from '../../../common'
import { IndentCodeLineOptions } from '../transforms/indentCodeLine'

export const getIndentDepth = (
  editor: Editor,
  { codeLine }: IndentCodeLineOptions
) => {
  const [, codeLinePath] = codeLine
  const text = getText(editor, codeLinePath)
  return text.search(/\S|$/)
}
