import React, { useMemo, useState } from 'react'
import { boolean } from '@storybook/addon-knobs'
import { CodeBlock } from '@styled-icons/boxicons-regular/CodeBlock'
import { FormatQuote, LooksOne, LooksTwo } from '@styled-icons/material'
import {
  BlockquotePlugin,
  CodeBlockPlugin,
  CodePlugin,
  EditablePlugins,
  ExitBreakPlugin,
  HeadingPlugin,
  HeadingToolbar,
  ListPlugin,
  ParagraphPlugin,
  pipe,
  ResetBlockTypePlugin,
  SlateDocument,
  SlatePlugin,
  SoftBreakPlugin,
  ToolbarCodeBlock,
  ToolbarElement,
  withCodeBlock,
  withList,
  withTrailingNode,
} from '@udecode/slate-plugins'
import { createEditor } from 'meow-slate'
import { withHistory } from 'meow-slate-history'
import { Slate, withReact } from 'meow-slate-react'
import { headingTypes, initialValueSoftBreak, options, optionsResetBlockTypes } from '../config/initialValues'

export default {
  title: 'Handlers/Soft Break',
  component: SoftBreakPlugin,
}

const withPlugins = [
  withReact,
  withHistory,
  withList(options),
  withCodeBlock(options),
  withTrailingNode({ type: options.p.type }),
] as const

export const BlockPlugins = () => {
  const plugins: SlatePlugin[] = [
    ParagraphPlugin(options),
    HeadingPlugin(options),
    CodeBlockPlugin(options),
    BlockquotePlugin(options),
    CodePlugin(options),
    ListPlugin(options),
    ResetBlockTypePlugin(optionsResetBlockTypes),
  ]
  if (boolean('SoftBreakPlugin', true))
    plugins.push(
      SoftBreakPlugin({
        rules: [
          { hotkey: 'shift+enter' },
          {
            hotkey: 'enter',
            query: {
              allow: [options.code_block.type, options.blockquote.type],
            },
          },
        ],
      }),
    )
  if (boolean('ExitBreakPlugin', true))
    plugins.push(
      ExitBreakPlugin({
        rules: [
          {
            hotkey: 'mod+enter',
          },
          {
            hotkey: 'mod+shift+enter',
            before: true,
          },
          {
            hotkey: 'enter',
            query: {
              start: true,
              end: true,
              allow: headingTypes,
            },
          },
        ],
      }),
    )

  const createReactEditor = () => () => {
    const [value, setValue] = useState(initialValueSoftBreak)

    const editor = useMemo(() => pipe(createEditor(), ...withPlugins), [])

    return (
      <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue as SlateDocument)}>
        <HeadingToolbar>
          <ToolbarElement type={options.h1.type} icon={<LooksOne />} />
          <ToolbarElement type={options.h2.type} icon={<LooksTwo />} />
          <ToolbarElement type={options.blockquote.type} icon={<FormatQuote />} />
          <ToolbarCodeBlock type={options.code_block.type} icon={<CodeBlock />} options={options} />
        </HeadingToolbar>
        <EditablePlugins plugins={plugins} placeholder="Enter some rich text???" spellCheck autoFocus />
      </Slate>
    )
  }

  const Editor = createReactEditor()

  return <Editor />
}
