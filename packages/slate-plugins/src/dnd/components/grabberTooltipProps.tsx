import React from 'react'
import { TippyProps } from '@tippyjs/react'

const GrabberTooltipContent = () => (
  <div style={{ fontSize: 13, color: '#fff' }}>
    <div>拖动调整位置</div>
  </div>
)
export const grabberTooltipProps: TippyProps = {
  content: <GrabberTooltipContent />,
  placement: 'top',
  arrow: true,
  offset: [3, 3],
  delay: [300, 0],
  duration: [0, 0],
  hideOnClick: true,
  theme: 'small',
}
