import { useStateContext } from '../../state'

export default (goto) => {
  const [{ stopOnInteraction }, dispatch] = useStateContext()

  function onClick () {
    if (stopOnInteraction) {
      dispatch({ type: 'SET_AUTOPLAY', autoPlayInterval: undefined })
    }
    if (typeof goto === 'number') {
      dispatch({ type: 'GOTO', index: goto })
    } else {
      dispatch({ type: goto === 'next' ? 'NEXT' : 'PREV' })
    }
  }
  return onClick
}
