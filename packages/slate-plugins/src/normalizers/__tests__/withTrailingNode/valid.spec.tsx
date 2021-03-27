/** @jsx jsx */

import { Editor } from 'meow-slate';
import { jsx } from '../../../__test-utils__/jsx';
import { ELEMENT_PARAGRAPH } from '../../../elements/paragraph/index';
import { withTrailingNode } from '../../withTrailingNode';

const input = (
  <editor>
    <hh1>
      <hp>test</hp>
    </hh1>
    <hh1>
      <hp>test2</hp>
    </hh1>
  </editor>
) as any;

const output = (
  <editor>
    <hh1>
      <hp>test</hp>
    </hh1>
    <hh1>
      <hp>test2</hp>
    </hh1>
  </editor>
) as any;

it('should be', () => {
  const editor = withTrailingNode({
    type: ELEMENT_PARAGRAPH,
    level: 1,
  })(input as Editor);

  editor.normalizeNode([input, []]);

  expect(input.children).toEqual(output.children);
});
