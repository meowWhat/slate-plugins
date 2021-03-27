import { ImageKeyOption, ImagePluginOptionsValues } from './types'

export const ELEMENT_IMAGE = 'img'

export const DEFAULTS_IMAGE: Record<
  ImageKeyOption,
  ImagePluginOptionsValues
> = {
  img: {
    // 优化后的 imageElement 会替代 defualts ImageElement
    // component: ImageElement,
    type: ELEMENT_IMAGE,
    rootProps: {
      className: 'slate-img',
    },
  },
}

export const ELEMENT_FILE = 'file'

export const DEFAULTS_FILE: Record<
  'file',
  ImagePluginOptionsValues
> = {
  file: {
    type: ELEMENT_FILE,
    rootProps: {
      className: 'slate-file',
    },
  },
}