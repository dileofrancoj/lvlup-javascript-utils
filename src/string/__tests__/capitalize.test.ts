import { expect, test } from 'vitest'
import { capitalize } from '../capitalize'

test.each([
  ['coca cola', 'Coca cola'],
  ['coca Del polar', 'Coca del polar'],
])('capitalize(%j) should be %j', (arg, expected) => {
  expect(capitalize(arg)).toBe(expected)
})
