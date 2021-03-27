import { IStyle } from '@uifabric/styling'
import { IStyleFunctionOrObject } from '@uifabric/utilities'
import { RenderElementProps } from 'slate-react'
import {
  Deserialize,
  ElementWithAttributes,
  HtmlAttributesProps,
  NodeToProps,
  RenderNodeOptions,
  RenderNodePropsOptions,
  RootProps,
} from '../../common/types/PluginOptions.types'

// Data of Element node
export interface ImageNodeData {
  url: string | ArrayBuffer
  fileObj: {
    fileName: string
    size: number
  }
  uuid: string
  status: 'loading' | 'success' | 'error'
  reload?: (retry?: boolean) => void
  // oss 上传后的 hash 
  resource?: string
}

export interface FileNodeData {
  fileObj: {
    fileName: string
    size: number
  }
  reload?: (retry?: boolean) => void
  status: 'loading' | 'success' | 'error'
  uuid: string
  // oss 上传后的 url地址
  url?: string
  // oss 上传后的 hash 
  resource?: string
}
// Element node
export interface ImageNode extends ElementWithAttributes, ImageNodeData {

}

export interface FileNode extends ElementWithAttributes, FileNodeData {

}
// renderElement options given as props
export interface ImageRenderElementPropsOptions {
  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<ImageElementStyleProps, ImageElementStyles>
  /**
   * The provided function is invoked by clicking on the the ToolbarImage, and the
   * resulting url is inserted as an image to the document.
   */
  getImageUrl?: () => Promise<string>
}

// renderElement props
export interface ImageElementProps extends RenderElementProps, RenderNodePropsOptions, HtmlAttributesProps, ImageRenderElementPropsOptions {
  element: ImageNode
}

export interface FileElementProps extends RenderElementProps, RenderNodePropsOptions, HtmlAttributesProps, ImageRenderElementPropsOptions {
  element: FileNode
}

export type ImageKeyOption = 'img'

// Plugin options
export type ImagePluginOptionsValues = RenderNodeOptions &
  RootProps<ImageRenderElementPropsOptions> &
  NodeToProps<ImageNode, ImageRenderElementPropsOptions> &
  Deserialize & {
    uploadFile?: (
      dataUrl: string | ArrayBuffer,
      file: File,
      uuid: string,
      retry?: boolean
    ) => void
  }
export type ImagePluginOptionsKeys = keyof ImagePluginOptionsValues
export type ImagePluginOptions<
  Value extends ImagePluginOptionsKeys = ImagePluginOptionsKeys
  > = Partial<Record<ImageKeyOption, Pick<ImagePluginOptionsValues, Value>>>

// renderElement options
export type ImageRenderElementOptionsKeys = ImagePluginOptionsKeys
export interface ImageRenderElementOptions
  extends ImagePluginOptions<ImageRenderElementOptionsKeys> { }

// deserialize options
export interface ImageDeserializeOptions
  extends ImagePluginOptions<'type' | 'rootProps' | 'deserialize'> { }

export interface ImageElementStyles {
  /**
   * Style for the root element.
   */
  root?: IStyle

  // Insert ImageElement classNames below
  img?: IStyle
}

export interface ImageElementStyleProps {
  /**
   * Accept custom classNames
   */
  className?: string

  // Insert ImageElement style props below
  selected?: boolean
  focused?: boolean
}
