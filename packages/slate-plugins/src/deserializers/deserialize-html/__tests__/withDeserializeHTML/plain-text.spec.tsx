/** @jsx jsx */

import { Editor } from 'meow-slate';
import { withReact } from 'meow-slate-react';
import { jsx } from '../../../../__test-utils__/jsx';
import { withDeserializeHTML } from '../../index';

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const data = {
  getData: (format: string) => (format === 'text/html' ? '' : 'inserted'),
};

const output = (
  <editor>
    <hp>
      testinserted
      <cursor />
    </hp>
  </editor>
) as any;

it('should do nothing', () => {
  jest.spyOn(JSON, 'parse').mockReturnValue(<fragment>inserted</fragment>);

  const editor = withDeserializeHTML()(withReact(input));

  editor.insertData(data as any);

  expect(input.children).toEqual(output.children);
});
