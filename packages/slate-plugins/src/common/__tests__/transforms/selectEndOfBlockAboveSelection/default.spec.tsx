/** @jsx jsx */

import { Editor } from 'slate';
import { jsx } from '../../../../__test-utils__/jsx';
import { selectEndOfBlockAboveSelection } from '../../../transforms/index';

const input = ((
  <editor>
    <hp>
      te
      <cursor />
      st
    </hp>
  </editor>
) as any) as Editor;

it('should be', () => {
  selectEndOfBlockAboveSelection(input);
  expect(input.selection?.anchor).toEqual({
    offset: 4,
    path: [0, 0],
  });
});
