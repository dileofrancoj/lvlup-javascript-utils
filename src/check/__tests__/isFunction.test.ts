import { expect, test } from 'vitest'
import { isFunction } from '../isFunction'

test.each([
  { expected: true, label: ' () => {}', tested: () => {} },
  { expected: false, label: '""', tested: '' },
  { expected: false, label: 2, tested: 2 },
  { expected: false, label: '{}', tested: {} },
])('isFunction(${label) should be $expected', ({ tested, expected }) => {
  expect(isFunction(tested)).toBe(expected)
})
