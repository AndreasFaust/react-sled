export default (goto, disabled) => {
  switch (typeof goto) {
    case 'number':
      return `sled-control sled-control-dot`
    case 'string':
    default:
      return `sled-control sled-control-arrow sled-control-arrow-${goto}`
  }
}
