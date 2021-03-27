/** @jsx jsx */

import { SlatePlugin } from 'slate-plugins-core';
import { getHtmlDocument } from '../../../../__test-utils__/getHtmlDocument';
import { jsx } from '../../../../__test-utils__/jsx';
import { deserializeHTMLElement } from '../../../index';

const html = `<html><body>test<br /></body></html>`;
const input1: SlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <editor>
    <htext>test{'\n'}</htext>
  </editor>
) as any;

it('should have the break line', () => {
  expect(
    deserializeHTMLElement({
      plugins: input1,
      element: input2,
    })
  ).toEqual(output.children);
});
