import * as React from 'react'
import { Node } from 'meow-slate'
import { ReactEditor } from 'meow-slate-react'

export interface SlateProps {
  [key: string]: unknown
  editor: ReactEditor
  value: Node[]
  children: React.ReactNode
  onChange: (value: Node[]) => void
}
