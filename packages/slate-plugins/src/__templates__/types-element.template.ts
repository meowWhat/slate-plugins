import { RenderElementOptions } from 'slate-plugins-core'
import { Element } from 'meow-slate'
import { RenderElementProps } from 'meow-slate-react'

// Data of Element node
export interface TemplateNodeData { }

// Element node
export interface TemplateNode extends Element, TemplateNodeData { }

// Type option
interface TypeOption {
  typeTemplate?: string
}

// deserialize options
export interface TemplateDeserializeOptions extends TypeOption { }

// renderElement options given as props
interface TemplateRenderElementOptionsProps { }

// renderElement options
export interface TemplateRenderElementOptions
  extends RenderElementOptions,
  TemplateRenderElementOptionsProps,
  TypeOption { }

// renderElement props
export interface TemplateRenderElementProps
  extends RenderElementProps,
  TemplateRenderElementOptionsProps {
  element: TemplateNode
}

// Plugin options
export interface TemplatePluginOptions
  extends TemplateRenderElementOptions,
  TemplateDeserializeOptions { }
