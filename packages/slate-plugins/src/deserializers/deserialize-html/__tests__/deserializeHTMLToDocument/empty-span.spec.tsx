/** @jsx jsx */

import { SlatePlugin } from 'slate-plugins-core/src';
import { jsx } from '../../../../__test-utils__/jsx';
import { deserializeHTMLToDocument } from '../../index';

const plugins: SlatePlugin[] = [];
const body = document.createElement('span');

const output = (
  <fragment>
    <block>
      <htext />
    </block>
  </fragment>
) as any;

it('should be', () => {
  expect(
    deserializeHTMLToDocument({
      plugins,
      element: body,
    })
  ).toEqual(output);
});
