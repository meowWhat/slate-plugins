/** @jsx jsx */

import { SlatePlugin } from 'slate-plugins-core/src';
import { getHtmlDocument } from '../../../../__test-utils__/getHtmlDocument';
import { jsx } from '../../../../__test-utils__/jsx';
import { deserializeHTMLElement } from '../../../index';

const html = `<html><body><h1>test</h1></body></html>`;
const input1: SlatePlugin[] = [];
const input2 = getHtmlDocument(html).body;

const output = (
  <editor>
    <htext>test</htext>
  </editor>
) as any;

it('should not deserialize the tags without plugins', () => {
  expect(
    deserializeHTMLElement({
      plugins: input1,
      element: input2,
    })
  ).toEqual(output.children);
});
