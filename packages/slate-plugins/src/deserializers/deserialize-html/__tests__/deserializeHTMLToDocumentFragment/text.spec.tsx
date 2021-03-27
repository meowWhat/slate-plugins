/** @jsx jsx */

import { SlatePlugin } from 'slate-plugins-core';
import { getHtmlDocument } from '../../../../__test-utils__/getHtmlDocument';
import { jsx } from '../../../../__test-utils__/jsx';
import { deserializeHTMLToDocumentFragment } from '../../utils/index';

const html = 'test';
const input1: SlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <fragment>
    <htext>test</htext>
  </fragment>
) as any;

it('should have the break line', () => {
  expect(
    deserializeHTMLToDocumentFragment({
      plugins: input1,
      element: input2,
    })
  ).toEqual(output);
});
