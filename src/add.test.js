const add = require('./add')

test('1 + 1 會等於 2', () => {
  expect(add(1, 1)).toBe(2)
})