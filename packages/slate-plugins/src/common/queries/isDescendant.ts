import { Descendant, Element, Text } from 'meow-slate'

export const isDescendant = (node: any): node is Descendant =>
  Element.isElement(node) || Text.isText(node)
