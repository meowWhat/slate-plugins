import React, { useMemo, useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import {
  decoratePreview,
  EditablePlugins,
  HeadingPlugin,
  ParagraphPlugin,
  pipe,
  PreviewPlugin,
  renderLeafPreview,
  SlateDocument,
} from '@udecode/slate-plugins'
import { createEditor } from 'meow-slate'
import { withHistory } from 'meow-slate-history'
import { Slate, withReact } from 'meow-slate-react'
import { initialValuePreview, options } from '../config/initialValues'

export default {
  title: 'Decorators/Preview Markdown',
  component: PreviewPlugin,
  subcomponents: {
    decoratePreview,
    renderLeafPreview,
  },
}

const withPlugins = [withReact, withHistory] as const

export const Example = () => {
  const plugins: any[] = [ParagraphPlugin(options), HeadingPlugin(options)]

  if (boolean('PreviewPlugin', true)) plugins.push(PreviewPlugin())

  const createReactEditor = () => () => {
    const [value, setValue] = useState(initialValuePreview)

    const editor = useMemo(() => pipe(createEditor(), ...withPlugins), [])

    return (
      <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue as SlateDocument)}>
        <EditablePlugins plugins={plugins} placeholder="Write some markdown..." />
      </Slate>
    )
  }

  const Editor = createReactEditor()

  return <Editor />
}
