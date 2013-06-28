# flood-fill #

A simple 2D [flood fill](http://en.wikipedia.org/wiki/Flood_fill) for use with
[ndarrays](http://github.com/mikolalysenko/ndarray).

You could use this to re-implement Microsoft Paint's bucket fill in
JavaScript, or in procedural dungeon generation to identify disconnected rooms.

[![flood fill](https://raw.github.com/hughsk/flood-fill/master/example.gif)](http://en.wikipedia.org/wiki/File:Recursive_Flood_Fill_4_%28aka%29.gif)

## Installation ##

``` bash
npm install flood-fill
```

## Usage ##

### `require('flood-fill')(ndarray, x, y, fillValue)` ###

Fills the array with `fillValue`, starting from the position at `(x, y)`.

This will also return an object with some very basic metrics for you to use:

* `area`: the total amount of cells filled.
* `hi`: the highest x/y positions filled.
* `lo`: the lowest x/y positions filled.

Note that `hi` and `lo` may not have been filled themselves.

``` javascript
var fill = require('flood-fill')
var zero = require('zeros')

var grid = zero([50, 50])
var height = grid.shape[1]
var width = grid.shape[0]

for (var x = 0; x < 50; x += 1) grid.set(x, 10, 1)
for (var x = 0; x < 50; x += 1) grid.set(x, 21, 1)
for (var y = 0; y < 50; y += 1) grid.set(10, y, 1)
for (var y = 0; y < 50; y += 1) grid.set(22, y, 1)

fill(grid, 30, 19, 2)

for (var y = 0; y < height; y += 1) {
  for (var x = 0; x < width; x += 1) {
    process.stdout.write(grid.get(x, y) ? '#' : ' ')
  }
  console.log()
}
```
