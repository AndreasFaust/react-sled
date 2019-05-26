import { useStateContext } from '../../state'

export default (goto) => {
  const [, dispatch] = useStateContext()

  switch (typeof goto) {
    case 'number':
      return () => dispatch({ type: 'GOTO', index: goto, pause: true })
    case 'string':
    default:
      return () => dispatch({ type: goto === 'next' ? 'NEXT' : 'PREV', pause: true })
  }
}
