export default (goto) => {
  switch (typeof goto) {
    case 'number':
      return `Slide to view with index ${goto}.`
    case 'string':
    default:
      return `Slide to ${goto === 'next' ? 'next' : 'previous'} view.`
  }
}
