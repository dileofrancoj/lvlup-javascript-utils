import { expect, test } from 'vitest'
import { isNullOrUndefined } from '../isNullOrUndefined'

test.each([
  { expected: false, label: '{}', tested: {} },
  { expected: false, label: '[]', tested: [] },
  { expected: false, label: 'true', tested: true },
  { expected: false, label: 'false', tested: false },
  { expected: false, label: '1', tested: 1 },
  { expected: true, label: 'null', tested: null },
  { expected: true, label: 'undefined', tested: undefined },
])('isNullOrUndefined($label) should be $expected', ({ tested, expected }) => {
  expect(isNullOrUndefined(tested)).toBe(expected)
})
