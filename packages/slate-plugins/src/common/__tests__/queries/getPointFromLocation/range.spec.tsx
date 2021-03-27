/** @jsx jsx */

import { Editor } from 'meow-slate';
import { jsx } from '../../../../__test-utils__/jsx';
import { getPointFromLocation } from '../../../queries/getPointFromLocation';

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const output = {
  offset: 4,
  path: [0, 0],
};

it('should be', () => {
  expect(getPointFromLocation(input)).toEqual(output);
});
