import { useDrag } from 'react-dnd'
import { Editor } from 'meow-slate'

export const useDragBlock = (editor: Editor, id: string) => {
  return useDrag(
    () => ({
      item: { type: 'block', id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      begin: () => {
        document.body.classList.add('dragging')
      },
      end: () => {
        document.body.classList.remove('dragging')
      },
    }),
    []
  )
}
