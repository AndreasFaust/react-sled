
function dimensionsHaveChanged(width?: number, prevWidth?: number, height?: number, prevHeight?: number): boolean {
  return width !== prevWidth || height !== prevHeight
}
export default dimensionsHaveChanged