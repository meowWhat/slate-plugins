/** @jsx jsx */
import { act, renderHook } from '@testing-library/react-hooks';
import { Editor } from 'meow-slate';
import { withHistory } from 'meow-slate-history';
import { withReact } from 'meow-slate-react';
import { jsx } from '../../../../../../__test-utils__/jsx';
import { pipe } from '../../../../../../common/utils/pipe';
import { useMention } from '../../../../index';
import { mentionables } from '../mentionables.fixture';

const input = ((
  <editor>
    <hp>
      t1 @t2
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

const withPlugins = [withReact, withHistory] as const;

it('should go down', () => {
  const editor = pipe(input, ...withPlugins);

  const { result } = renderHook(() => useMention(mentionables));

  act(() => {
    result.current.onChangeMention(editor);
  });

  act(() => {
    result.current.onKeyDownMention(
      new KeyboardEvent('keydown', { key: 'Escape' }),
      editor
    );
  });

  expect(result.current.target).toEqual(null);
});
