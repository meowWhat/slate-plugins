import { Ancestor, Editor } from 'meow-slate'
import { EditorAboveOptions } from '../types/Editor.types'
import { getAbove } from './getAbove'

/**
 * Get the block above a location (default: selection).
 */
export const getBlockAbove = <T = Ancestor>(
  editor: Editor,
  options: EditorAboveOptions<T> = {}
) =>
  getAbove<T>(editor, {
    ...options,
    block: true,
  })
