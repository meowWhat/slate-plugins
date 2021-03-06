/** @jsx jsx */

import { Editor } from 'meow-slate';
import { jsx } from '../../../../__test-utils__/jsx';
import { getNode } from '../../../queries/index';

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

it('should be', () => {
  expect(getNode(input, [0, 0, 0])).toBeNull();
});
