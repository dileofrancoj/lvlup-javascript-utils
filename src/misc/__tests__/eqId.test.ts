import { expect, test } from 'vitest'
import { eqId } from '../eqId'

test.each([
  ['11', '11', true],
  [11, '11', true],
  ['11', 11, true],
  [11, 11, true],
  [null, null, true],
  [undefined, undefined, true],
  ['11', '12', false],
  [11, 12, false]
])('eqId(%j, %j) should be %j', (a, b, expected) => {
  expect(eqId(a, b)).toBe(expected)
})
