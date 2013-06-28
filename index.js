
module.exports = fill

function fill(grid, x, y, filler) {
  var height = grid.shape[1]
  var width = grid.shape[0]
  var data = grid.data
  var empty = data[y + x*height]
  var queuex = [x]
  var queuey = [y]
  var curry, currx
  var verty
  var north
  var south
  var n

  while (queuey.length) {
    currx = queuex.pop()
    curry = queuey.pop()
    row = currx*height

    if (data[curry + row] === empty) {
      north = south = curry

      do {
        north -= 1
      } while (
        data[north + row] === empty &&
        north >= 0
      )

      do {
        south += 1
      } while (
        data[south + row] === empty &&
        south < height
      )

      for (n = north + 1; n < south; n += 1) {
        data[n + row] = filler
        if (data[n + row - height] === empty) {
          queuex.push(currx - 1)
          queuey.push(n)
        }
        if (data[n + row + height] === empty) {
          queuex.push(currx + 1)
          queuey.push(n)
        }
      }
    }
  }

  return grid
}
