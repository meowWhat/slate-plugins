/** @jsx jsx */
import { act, renderHook } from '@testing-library/react-hooks';
import { Editor } from 'meow-slate';
import { withHistory } from 'meow-slate-history';
import { withReact } from 'meow-slate-react';
import { jsx } from '../../../../../__test-utils__/jsx';
import { pipe } from '../../../../../common/utils/pipe';
import { useMention } from '../../../index';

const input = ((
  <editor>
    <hp>test</hp>
  </editor>
) as any) as Editor;

const withPlugins = [withReact, withHistory] as const;

it('should do nothing', () => {
  const editor = pipe(input, ...withPlugins);

  const { result } = renderHook(() => useMention());

  act(() => {
    result.current.onChangeMention(editor);
  });

  expect(result.current.index).toBe(0);
});
