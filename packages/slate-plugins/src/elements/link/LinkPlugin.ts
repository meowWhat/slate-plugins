import { SlatePlugin } from 'slate-plugins-core'
import { setDefaults } from '../../common/utils/setDefaults'
import { DEFAULTS_LINK } from './defaults'
import { deserializeLink } from './deserializeLink'
import { renderElementLink } from './renderElementLink'
import { LinkPluginOptions } from './types'

/**
 * Enables support for hyperlinks.
 */
export const LinkPlugin = (options?: LinkPluginOptions): SlatePlugin => {
  const { link } = setDefaults(options, DEFAULTS_LINK)

  return {
    renderElement: renderElementLink(options),
    deserialize: deserializeLink(options),
    inlineTypes: [link.type],
  }
}
