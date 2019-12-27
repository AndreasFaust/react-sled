import React, { useRef } from 'react'
// import styled from 'styled-components'

import Springs from './springs'
import { IViewsProps, ViewsProps } from './state/types-defaults'

import useCSSHeight from './hooks/useCSSHeight'
import useDimensions from './hooks/useDimensions'
import useKeyboard from './hooks/useKeyboard'
import useDragging from './hooks/useDragging'
import useMouseOver from './hooks/useMouseOver'
import useGoto from './hooks/useGoto'
import useFocus from './hooks/useFocus'
import useViewCount from './hooks/useViewCount'
import useAutoPlay from './hooks/useAutoPlay'
import useConfig from './hooks/useConfig'
import useRewind from './hooks/useRewind'
import usePause from './hooks/usePause'
import useStopOnInteraction from './hooks/useStopOnInteraction'

// const StyledDiv = styled.div`
//   ${props => props.cssHeight}
//   ${props => props.styles}
//   user-select: none;

//   :focus,
//   .sled-view:focus {
//     outline: none;
//   }
// `


const SledViews: React.FC<IViewsProps> = ({
  children,
  style,
  width,
  height,
  goto,
  keyboard,
  dragging,
  dragDistance,
  autoPlayInterval,
  config,
  pauseOnMouseOver,
  stopOnInteraction,
  rewind,
  pause,
  onSledEnd,
  onAnimationStart,
  onAnimationEnd
}) => {

  const viewsRef = useRef()
  const cssHeight = useCSSHeight(height)
  useDimensions(viewsRef, width, height, cssHeight)
  useFocus(viewsRef)
  useViewCount(children)
  useRewind(rewind)
  usePause(pause)

  useStopOnInteraction(stopOnInteraction)
  useMouseOver(pauseOnMouseOver, viewsRef)
  useGoto(goto)
  useKeyboard(keyboard)
  useDragging(dragging, dragDistance)
  useAutoPlay(autoPlayInterval)

  useConfig(config)

  return (
    <div
      className='sled'
      ref={viewsRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: width || '100%',
        height: '400px',
        ...style,
      }}
      tabIndex={0}
    >
      <Springs
        onAnimationStart={onAnimationStart}
        onAnimationEnd={onAnimationEnd}
        onSledEnd={onSledEnd}
      >
        {children}
      </Springs>
    </div>
  )
}

SledViews.defaultProps = ViewsProps

export default SledViews
