import { SlatePlugin } from 'slate-plugins-core'
import { Descendant, Element } from 'meow-slate'
import { jsx } from 'meow-slate-hyperscript'
import { DeserializeHTMLChildren } from '../types'

/**
 * Deserialize HTML to Element.
 */
export const deserializeHTMLToElement = ({
  plugins,
  element,
  children,
}: {
  plugins: SlatePlugin[]
  element: HTMLElement
  children: DeserializeHTMLChildren[]
}): Element | undefined => {
  let slateElement: any
  let withoutChildren: boolean | undefined

  plugins.some(({ deserialize: pluginDeserializers }) => {
    if (!pluginDeserializers?.element) return

    return pluginDeserializers.element.some((deserializer) => {
      const deserialized = deserializer.deserialize(element)
      if (!deserialized) return

      slateElement = deserialized
      withoutChildren = deserializer.withoutChildren
      return true
    })
  })

  if (slateElement) {
    let descendants = children as Descendant[]
    if (!descendants.length || withoutChildren) {
      descendants = [{ text: '' }]
    }

    return jsx('element', slateElement, descendants)
  }
}
