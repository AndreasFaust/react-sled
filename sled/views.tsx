import React, { useRef } from 'react'

import Springs from './springs'
import { IViewsProps, ViewsProps } from './state/types-defaults'

import useProportion from './hooks/useProportion'
import useDimensions from './hooks/useDimensions'
import useKeyboard from './hooks/useKeyboard'
import useDragging from './hooks/useDragging'
import useMouseOver from './hooks/useMouseOver'
import useSelect from './hooks/useSelect'
import useFocus from './hooks/useFocus'
import useViewCount from './hooks/useViewCount'
import useAutoPlay from './hooks/useAutoPlay'
import useConfig from './hooks/useConfig'
import useRewind from './hooks/useRewind'
import usePause from './hooks/usePause'
import useStopOnInteraction from './hooks/useStopOnInteraction'
import './index.css'

const SledViews: React.FC<IViewsProps> = ({
  children,
  style,
  width,
  height,
  proportion,
  select,
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

  const viewsRef = useRef<HTMLDivElement>()
  useDimensions(viewsRef, width, height)
  const proportionClasses = useProportion(proportion)
  useFocus(viewsRef)
  useViewCount(children)
  useRewind(rewind)
  usePause(pause)

  useStopOnInteraction(stopOnInteraction)
  useMouseOver(pauseOnMouseOver, viewsRef)
  useSelect(select)
  useKeyboard(keyboard)
  useDragging(dragging, dragDistance)
  useAutoPlay(autoPlayInterval)

  useConfig(config)

  return (
    <div
      className={`sled ${proportionClasses}`}
      ref={viewsRef}
      style={{
        width: width || '100%',
        height,
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
