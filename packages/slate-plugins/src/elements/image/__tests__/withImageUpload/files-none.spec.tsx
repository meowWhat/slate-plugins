/** @jsx jsx */

import { withReact } from 'meow-slate-react'
import { jsx } from '../../../../__test-utils__/jsx'
import { withImageUpload } from '../../../index'

const input = (
  <editor>
    <hp>test</hp>
  </editor>
) as any

const output = (
  <editor>
    <hp>test</hp>
  </editor>
) as any

it('should run default insertData', () => {
  jest.spyOn(JSON, 'parse').mockReturnValue(<fragment>image.png</fragment>)

  const editor = withImageUpload()(withReact(input))

  const data = {
    getData: () => 'test',
  }
  editor.insertData(data as any)

  expect(input.children).toEqual(output.children)
})
