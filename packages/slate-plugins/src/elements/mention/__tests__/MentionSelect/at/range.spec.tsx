import * as React from 'react';
import { render } from '@testing-library/react';
import { createEditor } from 'meow-slate';
import { ReactEditor } from 'meow-slate-react';
import * as SlateReact from 'meow-slate-react';
import { ELEMENT_PARAGRAPH } from '../../../../paragraph/index';
import { MentionSelect } from '../../../components/index';
import { mentionables } from '../../useMention/onKeyDown/mentionables.fixture';

it('should render null', () => {
  const editor = createEditor();
  editor.children = [
    {
      type: ELEMENT_PARAGRAPH,
      children: [
        {
          text: '@t2',
        },
      ],
    },
  ];

  editor.selection = {
    anchor: { path: [0, 0], offset: 0 },
    focus: { path: [0, 0], offset: 0 },
  };

  jest.spyOn(SlateReact, 'useSlate').mockReturnValue(null as any);
  jest.spyOn(ReactEditor, 'toDOMRange').mockReturnValue({
    getBoundingClientRect: () => ({
      top: 1,
      left: 1,
      width: 100,
    }),
  } as any);

  const { getByTestId } = render(
    <MentionSelect
      data-testid="MentionSelect"
      at={editor.selection}
      options={mentionables}
      valueIndex={0}
      onClickMention={() => {}}
    />
  );

  expect(getByTestId('MentionSelect')).toBeVisible();
});
