
module.exports = fill

function fill(grid, x, y, filler) {
  var height = grid.shape[1]
  var width = grid.shape[0]
  var data = grid.data
  var empty = data[y + x*height]
  var queuex = [x]
  var queuey = [y]
  var curry, currx
  var minx = x
  var miny = y
  var maxx = x
  var maxy = y
  var area = 0
  var verty
  var north
  var south
  var n

  while (queuey.length) {
    currx = queuex.pop()
    curry = queuey.pop()
    minx = currx < minx ? currx : minx
    maxx = currx > maxx ? currx : maxx
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

      miny = north+1 < miny ? north+1 : miny
      maxy = south-1 > maxy ? south-1 : maxy

      for (n = north + 1; n < south; n += 1) {
        data[n + row] = filler
        area += 1
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

  return {
      lo: [minx, miny]
    , hi: [maxx, maxy]
    , area: area
  }
}
