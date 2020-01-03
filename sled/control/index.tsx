import React, { useRef, ReactNode } from 'react'
import CSS from 'csstype';
import { TSelect } from "../state/types-defaults"

import './index.css'

import useDisabled from './hooks/useDisabled'
import useClassName from './hooks/useClassName'
import useLabel from './hooks/useLabel'
import useClick from './hooks/useClick'

import useFocus from '../hooks/useFocus'

interface IProps {
  select: TSelect
  style?: CSS.Properties
  className?: string
  children?: ReactNode
}

const SledControl: React.FC<IProps> = ({
  children, select, style, className = 'default'
}) => {
  const controlRef = useRef()
  useFocus(controlRef)
  const disabled = useDisabled(select)
  const classNames = useClassName(select, className, disabled)
  // const label = useLabel(select)
  const onClick = useClick(select)

  return (
    <div
      className={classNames}
      style={style}
      ref={controlRef}
      // ariaLabel={label}
      tabIndex={0}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default SledControl
