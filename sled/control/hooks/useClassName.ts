import { TSelect } from "../../state/types-defaults"
import { useStateContext } from '../../state'
import { useDirectionDisabled } from './useDirectionDisabled'

function getClassName(type: 'index' | 'direction', select: TSelect, className: string): string {
  const [{ currentIndex }] = useStateContext()

  const directionDisabled = useDirectionDisabled(select)

  const baseClass: string = 'sled-control'
  const typeClass: string = `${baseClass}-${type}`
  const typeClassSpecific: string = `${typeClass}-${select}`
  const distinctClass: string = `${baseClass}-${className || type + '-default'}`
  const disabledClasses: string[] = [
    `${baseClass}-disabled`,
    `${typeClass}-disabled`,
    `${distinctClass}-disabled`
  ]
  const activeClasses: string[] = [
    `${baseClass}-active`,
    `${typeClass}-active`,
    `${distinctClass}-active`
  ]

  const classes: string[] = [
    baseClass,
    typeClass,
    typeClassSpecific,
    distinctClass,
  ]

  if (select === currentIndex) { // isActive
    return [...classes, ...activeClasses].join(' ')
  }
  if (directionDisabled) {
    return [...classes, ...disabledClasses].join(' ')
  }
  return classes.join(' ')
}

export default (select: TSelect, className: string) => {
  switch (typeof select) {
    case 'number':
      return getClassName('index', select, className)
    case 'string':
    default:
      return getClassName('direction', select, className)
  }
}