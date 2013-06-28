var zeros = require('zeros')
var grid = zeros([45, 30])
var fill = require('./')

require('colors')

var chars = [
    ' '
  , '#'.red
  , '#'.green
  , '#'.blue
  , '#'.bold
]

for (var x = 0; x < 45; x += 1) grid.set(x, 10, 4)
for (var x = 0; x < 45; x += 1) grid.set(x, 21, 4)
for (var y = 0; y < 30; y += 1) grid.set(10, y, 4)
for (var y = 0; y < 30; y += 1) grid.set(22, y, 4)

console.log()
console.log(fill(grid, 15, 22, 2))
console.log(fill(grid, 9, 12, 1))
console.log(fill(grid, 30, 9, 3))
console.log()

draw(grid)

function draw(grid) {
  var height = grid.shape[1]
  var width = grid.shape[0]

  for (var y = 0; y < height; y += 1) {
    for (var x = 0; x < width; x += 1) {
      process.stdout.write(chars[grid.get(x, y)])
    }
    console.log()
  }
}
