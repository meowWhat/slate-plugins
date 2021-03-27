import * as React from 'react';
import { RenderLeafProps } from 'meow-slate-react';
import { PreviewLeaf } from './components/PreviewLeaf';

export const renderLeafPreview = () => (props: RenderLeafProps) => (
  <PreviewLeaf {...props} />
);
