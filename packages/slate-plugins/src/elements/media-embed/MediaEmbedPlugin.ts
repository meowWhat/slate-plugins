import { SlatePlugin } from 'slate-plugins-core'
import { setDefaults } from '../../common/utils/setDefaults'
import { DEFAULTS_MEDIA_EMBED } from './defaults'
import { deserializeIframe } from './deserializeIframe'
import { renderElementMediaEmbed } from './renderElementMediaEmbed'
import { MediaEmbedPluginOptions } from './types'

/**
 * Enables support for embeddable media such as YouTube
 * or Vimeo videos, Instagram posts and tweets or Google Maps.
 */
export const MediaEmbedPlugin = (
  options?: MediaEmbedPluginOptions
): SlatePlugin => {
  const { media_embed } = setDefaults(options, DEFAULTS_MEDIA_EMBED)

  return {
    renderElement: renderElementMediaEmbed(options),
    deserialize: deserializeIframe(options),
    voidTypes: [media_embed.type],
  }
}
