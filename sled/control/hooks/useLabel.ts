import { TSelect } from "../../state/types-defaults"

export default (select: TSelect) => {
  switch (typeof select) {
    case 'number':
      return `Slide to view with index ${select}.`
    case 'string':
    default:
      return `Slide to ${select === 'next' ? 'next' : 'previous'} view.`
  }
}
