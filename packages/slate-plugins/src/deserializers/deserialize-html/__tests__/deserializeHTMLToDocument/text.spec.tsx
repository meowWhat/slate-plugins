/** @jsx jsx */

import { SlatePlugin } from 'slate-plugins-core';
import { getHtmlDocument } from '../../../../__test-utils__/getHtmlDocument';
import { jsx } from '../../../../__test-utils__/jsx';
import { deserializeHTMLToDocument } from '../../index';

const html = 'test';
const input1: SlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <fragment>
    <block>
      <htext>test</htext>
    </block>
  </fragment>
) as any;

it('should have the break line', () => {
  expect(
    deserializeHTMLToDocument({
      plugins: input1,
      element: input2,
    })
  ).toEqual(output);
});
