import { Editor } from 'meow-slate'
import { isExpanded } from './isExpanded'

/**
 * Is the selection expanded.
 */
export const isSelectionExpanded = (editor: Editor) =>
  isExpanded(editor.selection)
