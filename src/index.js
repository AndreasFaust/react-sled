import React, { useEffect, useRef } from 'react'
import propTypes from 'prop-types'
import useWidth from './utils/useWidth'
import useHeight from './utils/useHeight'
import Viewpager from './viewpager'

const ViewpagerWrapper = (props) => {
  const wrapperRef = useRef()
  const width = useWidth(wrapperRef, props.wrapperWidth)
  const height = useHeight(props.wrapperHeight, width)

  return (
    <div
      className='viewpager'
      ref={wrapperRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height
      }}
    >
      {height && (
        <Viewpager
          key={width} // use widt as key to re-render component on resize
          width={width}
          height={height}
          auto={props.auto}
        >
          {props.children}
        </Viewpager>
      )}
    </div>
  )
}

ViewpagerWrapper.propTypes = {
  children: propTypes.node,
  wrapperWidth: propTypes.number,
  wrapperHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
  auto: propTypes.number
}

ViewpagerWrapper.defaultTypes = {
  children: null,
  wrapperWidth: undefined,
  wrapperHeight: '50%',
  auto: undefined
}

export default ViewpagerWrapper
