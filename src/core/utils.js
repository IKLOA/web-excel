export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    const swap = start
    start = end
    end = swap
  }
  return new Array(end - start + 1).fill('').map((_, index) => {
    return start + index
  })
}
