import presets from '../presets'

export default (goto) => {
  switch (typeof goto) {
    case 'number':
      return presets['dot']
    case 'string':
    default:
      return goto === 'next'
        ? presets['arrowRight']
        : presets['arrowLeft']
  }
}
