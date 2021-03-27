import { SlatePlugin } from 'slate-plugins-core';
import { Descendant } from 'slate';
import { SlateDocumentFragment } from '../../../common';
import { normalizeDescendantsToDocumentFragment } from '../../../common/utils';
import { htmlStringToDOMNode } from '../../../serializers/serialize-html/utils/htmlStringToDOMNode';
import { deserializeHTMLElement } from './deserializeHTMLElement';

/**
 * Deserialize HTML element to a valid document fragment.
 */
export const deserializeHTMLToDocumentFragment = ({
  plugins,
  element,
}: {
  plugins: SlatePlugin[];
  element: HTMLElement | string;
}): SlateDocumentFragment => {
  if (typeof element === 'string') {
    element = htmlStringToDOMNode(element);
  }

  const fragment = deserializeHTMLElement({
    plugins,
    element,
  }) as Descendant[];

  return normalizeDescendantsToDocumentFragment(fragment);
};
