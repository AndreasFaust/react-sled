import { TSelect } from "../../state/types-defaults"

function isDisabled(type: 'dot' | 'arrow', disabled: boolean): string {
  return disabled ? `sled-control-disabled sled-${type}-disabled` : ''
}
function getClassName(type: 'dot' | 'arrow', className: string, disabled: boolean): string {
  return `sled-control-${type} sled-control-${className} sled-control-${type}-${className} ${isDisabled(type, disabled)}`
}
function getDirection(select: TSelect) {
  return `sled-control-arrow-${select}`
}

export default (select: TSelect, className: string, disabled: boolean) => {
  switch (typeof select) {
    case 'number':
      return `sled-control ${getClassName('dot', className, disabled)}`
    case 'string':
    default:
      return `sled-control ${getClassName('arrow', className, disabled)} ${getDirection(select)}`
  }
}
