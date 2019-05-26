import React from 'react'

const ArrowRight = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 210 140'>
    <polyline fill='none' stroke='#000000' strokeWidth='15' strokeMiterlimit='15' points='133,130 194,70 133,10 ' />
    <line stroke='#000000' strokeWidth='10' strokeMiterlimit='10' x1='194' y1='70' x2='15' y2='70' />
  </svg>
)

const ArrowLeft = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 210 140'>
    <polyline fill='none' stroke='#000000' strokeWidth='15' strokeMiterlimit='15' points='76,130 15,70 76,10 ' />
    <line stroke='#000000' strokeWidth='10' strokeMiterlimit='10' x1='15' y1='70' x2='194' y2='70' />
  </svg>
)

const DefaultArrow = ({ goto }) => {
  return (
    goto === 'next'
      ? <ArrowRight />
      : <ArrowLeft />
  )
}

export default DefaultArrow
