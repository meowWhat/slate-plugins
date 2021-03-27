import { SlatePlugin } from 'slate-plugins-core'
import { onKeyDownResetBlockType } from './onKeyDownResetBlockType'
import { ResetBlockTypePluginOptions } from './types'

/**
 * Enables support for resetting block type from rules.
 */
export const ResetBlockTypePlugin = (
  options: ResetBlockTypePluginOptions
): SlatePlugin => ({
  onKeyDown: onKeyDownResetBlockType(options),
})
