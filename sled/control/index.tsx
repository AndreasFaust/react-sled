import React, { useRef, ReactNode } from 'react'
import CSS from 'csstype';
import { TSelect } from "../state/types-defaults"
import { useStateContext } from '../state'
import { useDirectionDisabled } from './hooks/useDirectionDisabled'

import './index.css'

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
  children, select, style, className
}) => {
  const controlRef = useRef()
  useFocus(controlRef)
  const directionDisabled = useDirectionDisabled(select)
  const classNames = useClassName(select, className)
  const label = useLabel(select)
  const onClick = useClick(select)
  const [{ currentIndex }] = useStateContext()

  return (
    <div
      className={classNames}
      style={style}
      ref={controlRef}
      role='button'
      aria-label={label}
      tabIndex={0}
      onClick={onClick}
      {...select === currentIndex || directionDisabled ? { 'aria-disabled': true } : {}}
    >
      {children}
    </div >
  )
}

export default SledControl
