import React, { useRef } from 'react'

import Springs from './springs'
import { IViewsProps, ViewsProps } from './state/types-defaults'

import useDirection from './hooks/useDirection'
import useDimensionsDOM from './hooks/useDimensionsDOM'
import useDimensions from './hooks/useDimensions'
import useProportion from './hooks/useProportion'
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
import useShowElements from './hooks/useShowElements'
import useSlideBy from './hooks/useSlideBy'
import useSlideSteps from './hooks/useSlideSteps'
import useSliderSize from './hooks/useSliderSize'
import { useStateContext } from './state'
import './index.css'

const SledViews: React.FC<IViewsProps> = ({
  children,
  style,
  width,
  height,
  proportion,
  direction,
  select,
  slideBy,
  showElements,
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
  const [{ dimensions, dimensionsDOM }] = useStateContext()


  useProportion(width, height, proportion)
  useDimensionsDOM(width, height)
  useDimensions(viewsRef)

  useDirection(direction)

  useFocus(viewsRef)
  useViewCount(children)
  useRewind(rewind)
  usePause(pause)

  useShowElements(showElements)
  useSlideBy(slideBy)
  useSliderSize()
  useSlideSteps()

  useStopOnInteraction(stopOnInteraction)
  useMouseOver(pauseOnMouseOver, viewsRef)
  useSelect(select)
  useKeyboard(keyboard)
  useDragging(dragging, dragDistance)
  useAutoPlay(autoPlayInterval)

  useConfig(config)

  return (
    <div
      className='sled'
      ref={viewsRef}
      style={{
        ...dimensionsDOM,
        ...style,
      }}
      tabIndex={0}
    >
      <div
        className='sled-sizer'
        style={dimensions}
      >
        <Springs
          onAnimationStart={onAnimationStart}
          onAnimationEnd={onAnimationEnd}
          onSledEnd={onSledEnd}
        >
          {children}
        </Springs>
      </div>
    </div>
  )
}

SledViews.defaultProps = ViewsProps

export default SledViews
