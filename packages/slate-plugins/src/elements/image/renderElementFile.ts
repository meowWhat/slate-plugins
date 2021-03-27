import { getRenderElements } from '../../common/utils/getRenderElement'
import { setDefaults } from '../../common/utils/setDefaults'
import { DEFAULTS_FILE, DEFAULTS_IMAGE } from './defaults'
import { ImageRenderElementOptions } from './types'

export const renderElementFile = (options?: ImageRenderElementOptions) => {
  const { img } = setDefaults(options, DEFAULTS_IMAGE)
  const { file } = setDefaults(options, DEFAULTS_FILE)

  return getRenderElements([img, file])
}
