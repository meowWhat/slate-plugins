import { SlatePlugin } from 'slate-plugins-core'
import { setDefaults } from '../../common/utils/setDefaults'
import { DEFAULTS_IMAGE, DEFAULTS_FILE } from './defaults'
import { deserializeImage } from './deserializeImage'
import { renderElementFile } from './renderElementFile'
import { ImagePluginOptions } from './types'

/**
 * Enables support for images.
 */
export const FilePlugin = (options?: ImagePluginOptions): SlatePlugin => {
  const { img } = setDefaults(options, DEFAULTS_IMAGE)
  const { file } = setDefaults(options, DEFAULTS_FILE)
  return {
    renderElement: renderElementFile(options),
    // deserialize: deserializeImage(options),
    voidTypes: [img.type, file.type],
  }
}
