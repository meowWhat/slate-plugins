/** @jsx jsx */

import { Editor, Range } from 'meow-slate';
import { jsx } from '../../../../__test-utils__/jsx';
import { isPointAtWordEnd } from '../../../queries/index';

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const at = Range.start(input.selection as Range);

const output = true;

it('should be', () => {
  expect(isPointAtWordEnd(input, { at })).toEqual(output);
});
