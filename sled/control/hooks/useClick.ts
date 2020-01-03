import React from 'react'
import { useStateContext } from '../../state'
import { TSelect } from "../../state/types-defaults"

interface IReturn {
  (): void;
}

const onClickFunction = (select: TSelect): IReturn => {
  const [{ stopOnInteraction }, dispatch] = useStateContext()

  function onClick() {
    if (stopOnInteraction) {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: undefined })
    }
    if (typeof select === 'number') {
      dispatch({ type: 'SELECT', index: select })
    } else {
      dispatch({ type: select === 'next' ? 'NEXT' : 'PREV' })
    }
  }
  return onClick
}

export default onClickFunction