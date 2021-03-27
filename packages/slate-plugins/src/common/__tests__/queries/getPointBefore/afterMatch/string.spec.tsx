/** @jsx jsx */

import { Editor } from 'meow-slate';
import { jsx } from '../../../../../__test-utils__/jsx';
import { getPointBefore } from '../../../../queries/getPointBefore';

const input = ((
  <editor>
    <hp>
      find **test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const output = {
  offset: 7,
  path: [0, 0],
};

it('should be', () => {
  expect(
    getPointBefore(input, input.selection as any, {
      skipInvalid: true,
      afterMatch: true,
      matchString: '**',
    })
  ).toEqual(output);
});
