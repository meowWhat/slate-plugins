import * as React from 'react'
import { classNamesFunction, styled } from '@uifabric/utilities'
import { Transforms } from 'slate'
import { ReactEditor, useEditor, useReadOnly } from 'slate-react'
import { TodoListElementProps, TodoListElementStyleProps, TodoListElementStyles } from '../types'
import { getTodoListElementStyles } from './TodoListElement.styles'

const getClassNames = classNamesFunction<TodoListElementStyleProps, TodoListElementStyles>()

/**
 * TodoListElement with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Component-Styling)
 */
export const TodoListElementBase = ({
  attributes,
  children,
  element,
  className,
  styles,
  htmlAttributes,
}: TodoListElementProps) => {
  const editor = useEditor()
  const readOnly = useReadOnly()

  const { checked } = element
  const classNames = getClassNames(styles, {
    className,
    // Other style props
    checked,
  })
  
  return (
    <div {...attributes} className={classNames.root} {...htmlAttributes}>
      <div contentEditable={false} className={classNames.checkboxWrapper}>
        <input
          data-testid="TodoListElementCheckbox"
          className={
            classNames.checkbox ? classNames.checkbox + ' slate-todo-item-checkbox' : 'slate-todo-item-checkbox'
          }
          type="checkbox"
          checked={!!checked}
          onChange={(e) => {
            const path = ReactEditor.findPath(editor, element)

            Transforms.setNodes(editor, { checked: e.target.checked }, { at: path })
          }}
        />
      </div>
      <span
        className={
          classNames.text
            ? classNames.text + (checked ? ' slate-todo-item-checked-text' : '')
            : checked
            ? 'slate-todo-item-checked-text'
            : ''
        }
        contentEditable={!readOnly}
        suppressContentEditableWarning
      >
        {children}
      </span>
    </div>
  )
}

/**
 * TodoListElement
 */
export const TodoListElement = styled<TodoListElementProps, TodoListElementStyleProps, TodoListElementStyles>(
  TodoListElementBase,
  getTodoListElementStyles,
  undefined,
  {
    scope: 'TodoListElement',
  },
)
