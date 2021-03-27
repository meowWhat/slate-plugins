// 此文件已重写于 only-brain-elements

import * as React from 'react'
import { classNamesFunction, styled } from '@uifabric/utilities'
import { useFocused, useSelected, ReactEditor, useEditor } from 'slate-react'
import { ImageElementProps, ImageElementStyleProps, ImageElementStyles } from '../types'
import { getImageElementStyles } from './ImageElement.styles'
import { Transforms } from 'slate'

const getClassNames = classNamesFunction<ImageElementStyleProps, ImageElementStyles>()

/**
 * ImageElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const ImageElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  htmlAttributes,
}: ImageElementProps) => {
  const { url, loading } = element
  const editor = useEditor()
  const focused = useFocused()
  const selected = useSelected()
  const classNames = getClassNames(styles, {
    className,
    // Other style props
    focused,
    selected,
  })

  return (
    <div {...attributes} className={classNames.root}>
      <div contentEditable={false}>
        {loading ? <div className="slate-img-mask"></div> : undefined}
        <div
          className="slate-img-delete"
          onClick={() => {
            const path = ReactEditor.findPath(editor, element)
            Transforms.removeNodes(editor, { at: path, match: (node) => node.type === element.type, mode: 'highest' })
          }}
        >
          delete
        </div>
        <img data-testid="ImageElementImage" className={classNames.img} src={url as string} alt="图片" {...htmlAttributes} />
      </div>
      {children}
    </div>
  )
}

/**
 * ImageElement
 */
export const ImageElement = styled<ImageElementProps, ImageElementStyleProps, ImageElementStyles>(
  ImageElementBase,
  getImageElementStyles,
  undefined,
  {
    scope: 'ImageElement',
  },
)
