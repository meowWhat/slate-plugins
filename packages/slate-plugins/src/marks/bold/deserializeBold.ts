import { DeserializeHtml } from 'slate-plugins-core'
import { getLeafDeserializer } from '../../common/utils/getLeafDeserializer'
import { setDefaults } from '../../common/utils/setDefaults'
import { DEFAULTS_BOLD } from './defaults'
import { BoldDeserializeOptions } from './types'

export const deserializeBold = (
  options?: BoldDeserializeOptions
): DeserializeHtml => {
  const { bold } = setDefaults(options, DEFAULTS_BOLD)

  return {
    leaf: getLeafDeserializer({
      type: bold.type,
      rules: [
        { nodeNames: ['STRONG'] },
        {
          style: {
            fontWeight: ['600', '700', 'bold'],
          },
        },
      ],
      ...options?.bold?.deserialize,
    }),
  }
}
