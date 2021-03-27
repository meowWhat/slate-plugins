/** @jsx jsx */

import { SlatePlugin } from 'slate-plugins-core';
import { getHtmlDocument } from '../../../../__test-utils__/getHtmlDocument';
import { jsx } from '../../../../__test-utils__/jsx';
import { ParagraphPlugin } from '../../../../elements/paragraph/index';
import { deserializeHTMLToDocumentFragment } from '../../utils/index';

const html = '<p>first</p><p>second</p>';
const input1: SlatePlugin[] = [ParagraphPlugin()];
const input2 = getHtmlDocument(html).body;

const output = (
  <fragment>
    <hp>first</hp>
    <hp>second</hp>
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
