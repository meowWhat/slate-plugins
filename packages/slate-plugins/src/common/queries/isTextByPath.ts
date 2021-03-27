import { Editor, Node, Path, Text } from 'meow-slate'

export const isTextByPath = (editor: Editor, path: Path) => {
  const node = Node.get(editor, path)

  return Text.isText(node)
}
