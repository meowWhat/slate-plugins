import { Node } from 'meow-slate'

export const createNode = (type = 'p', text = ''): Node => ({
  type,
  children: [{ text }],
})
