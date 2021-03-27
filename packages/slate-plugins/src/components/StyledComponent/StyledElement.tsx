import * as React from 'react'
import { classNamesFunction, styled } from '@uifabric/utilities'
import { getStyledComponentStyles } from './StyledComponent.styles'
import {
  StyledComponentStyleProps,
  StyledComponentStyles,
  StyledElementProps,
} from './StyledComponent.types'
import { useEditor, ReactEditor } from 'meow-slate-react'
import { Transforms } from 'meow-slate'

const getClassNames = classNamesFunction<
  StyledComponentStyleProps,
  StyledComponentStyles
>()

/**
 * StyledElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const StyledElementBase = ({
  attributes,
  children,
  className,
  styles,
  htmlAttributes,
  as = 'div',
  element
}: StyledElementProps) => {
  const classNames = getClassNames(styles, {
    className,
    // Other style props
  })
  const editor = useEditor()
  const Tag = as
  if (Tag === 'li') {
    const isShowLolly = element.children.length > 1
    return (
      <Tag {...attributes} className={classNames.root} {...htmlAttributes} suppressContentEditableWarning  >
        {
          isShowLolly ?
            (
              <span
                className={`slate-li-span`}
                contentEditable={false}
                onClick={() => {
                  const path = ReactEditor.findPath(editor, element.children[1])
                  const list = element.children[1]
                  Transforms.setNodes(
                    editor,
                    { hide: !!!list.hide },
                    {
                      at: path
                    }
                  )
                }}>
                🍭
              </span>
            )
            : null
        }
        {children}
      </Tag>
    )
  }

  if (Tag === 'ul' || Tag == 'ol') {
    const { hide } = element
    return (
      <Tag {...attributes} className={classNames.root + (hide ? ' slate-list-hide' : '')} {...htmlAttributes}>
        {children}
      </Tag>
    )
  }

  return (
    <Tag {...attributes} className={classNames.root} {...htmlAttributes}>
      {children}
    </Tag>
  )
}

export const StyledElement = styled<
  StyledElementProps,
  StyledComponentStyleProps,
  StyledComponentStyles
>(StyledElementBase, getStyledComponentStyles, undefined, {
  scope: 'StyledElement',
})
