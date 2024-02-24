import { expect,  describe, test } from 'vitest'
import { arraylable } from '../arraylable'

describe('arraylable', () => {
  test('Empty test', () => {})
  test('Should be empty [] when imput is null', () => {
    expect(arraylable(null)).toStrictEqual([])
  })
  test('should be empty when imput is an empty object', () => {
    // @ts-expect-error - we are testing this
    expect(arraylable({})).toStrictEqual([])
  })
})
/*
test.each([
  { expected: [], label: 'null', tested: null },
  { expected: [], label: 'undefined', tested: undefined },
  { expected: [1, 2, 3], label: '[1, 2, 3]', tested: [1, 2, 3] },
  { expected: [], label: '{ foo: 1 }', tested: { foo: 1 } }
])('arraylable($label) should be $expected', ({ tested, expected }) => {
  // @ts-expect-error - we are testing the case where dataSource is invalid
  expect(arraylable(tested)).toStrictEqual(expected)
})
 */
