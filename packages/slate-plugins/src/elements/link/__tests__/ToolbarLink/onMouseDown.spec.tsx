import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as SlateReact from 'meow-slate-react';
import { withReact } from 'meow-slate-react';
import { withInlineVoid } from '../../../../common/plugins/inline-void/withInlineVoid';
import { pipe } from '../../../../common/utils/pipe';
import { ToolbarLink } from '../../components/ToolbarLink';
import { ELEMENT_LINK } from '../../defaults';
import { withLink } from '../../withLink';
import { input, output } from './onMouseDown.fixture';

it('should render', () => {
  const editor = pipe(
    input,
    withReact,
    withLink(),
    withInlineVoid({ inlineTypes: [ELEMENT_LINK] })
  );

  jest.spyOn(SlateReact, 'useSlate').mockReturnValue(editor as any);
  jest
    .spyOn(window, 'prompt')
    .mockReturnValue('https://i.imgur.com/removed.png');

  const { getByTestId } = render(<ToolbarLink icon={null} />);

  const element = getByTestId('ToolbarButton');
  fireEvent.mouseDown(element);

  expect(editor.children).toEqual(output.children);
});
