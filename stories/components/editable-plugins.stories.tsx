import React, { useMemo, useState } from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { EditablePlugins, pipe, SlateDocument } from '@udecode/slate-plugins'
import { createEditor } from 'meow-slate'
import { withHistory } from 'meow-slate-history'
import { Slate, withReact } from 'meow-slate-react'
import { initialValuePlainText } from '../config/initialValues'

export default {
  title: 'Components/EditablePlugins',
  component: EditablePlugins,
}

const withPlugins = [withReact, withHistory] as const

export const Example = () => {
  const [value, setValue] = useState(initialValuePlainText)

  const editor = useMemo(() => pipe(createEditor(), ...withPlugins), [])

  return (
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue as SlateDocument)}>
      <EditablePlugins
        readOnly={boolean('readOnly', false)}
        placeholder={text('placeholder', 'Enter some plain text...')}
        spellCheck={boolean('spellCheck', true)}
        autoFocus
      />
    </Slate>
  )
}
