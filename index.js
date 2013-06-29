
module.exports = fill

function fill(grid, x, y, filler) {
  var height = grid.shape[1]
  var width = grid.shape[0]
  var data = grid.data
  var empty = grid.get(x, y)
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

    if (grid.get(currx, curry) === empty) {
      north = south = curry

      do {
        north -= 1
      } while (
        grid.get(currx, north) === empty &&
        north >= 0
      )

      do {
        south += 1
      } while (
        grid.get(currx, south) === empty &&
        south < height
      )

      miny = north+1 < miny ? north+1 : miny
      maxy = south-1 > maxy ? south-1 : maxy

      for (n = north + 1; n < south; n += 1) {
        grid.set(currx, n, filler)
        area += 1
        if (grid.get(currx - 1, n) === empty) {
          queuex.push(currx - 1)
          queuey.push(n)
        }
        if (grid.get(currx + 1, n) === empty) {
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
