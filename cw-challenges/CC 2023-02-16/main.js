// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    const values = [width, height, depth]
    const area = [width * height, depth * width, depth * height]
                  .map(num => 2 * num)
                  .reduce((a,c) => a + c, 0)
    const volume = values.reduce((a,c) => a * c, 1)
    return [area, volume]
  }