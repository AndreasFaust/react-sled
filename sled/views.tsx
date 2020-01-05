import React, { useRef } from 'react'

import Springs from './springs'
import { IViewsProps, ViewsProps } from './state/types-defaults'

import useDirection from './hooks/useDirection'
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
import useShowSlides from './hooks/useShowSlides'
import useSlideBy from './hooks/useSlideBy'
import useSlideSteps from './hooks/useSlideSteps'
import useSliderSize from './hooks/useSliderSize'
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
  showSlides,
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
  const dimensions = useDimensions(width, height, proportion, viewsRef)
  useDirection(direction)
  // const proportionClasses = useProportion(proportion)
  useFocus(viewsRef)
  useViewCount(children)
  useRewind(rewind)
  usePause(pause)

  useShowSlides(showSlides)
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
        width,
        height,
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
