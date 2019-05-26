
function test (child) {
  return child.type.displayName === 'Control' ||
    child.type.displayName === 'ControlWrapper' ||
    child.type.displayName === 'Progress'
}

export default (child) => {
  if (Array.isArray(child)) {
    return child.find((c) => test(c))
  }
  return test(child)
}
