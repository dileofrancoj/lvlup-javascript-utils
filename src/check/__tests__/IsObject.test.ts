import { expect, test } from 'vitest'
import { isObject } from '../isObject'

test.each([
  { expected: true, label: '{}', tested: {} },
  { expected: true, label: '[]', tested: [] },
  { expected: true, label: '/d+/gu', tested: /d+/gu },
  { expected: true, label: 'new Date()', tested: new Date() },
  { expected: false, label: `Symbol('')`, tested: Symbol('') },
  { expected: false, label: '() => {}', tested: () => {} },
  { expected: false, label: 'null', tested: null },
  { expected: false, label: 'undefined', tested: undefined },
  { expected: false, label: '1', tested: 1 },
  { expected: false, label: `''`, tested: '' },
])('isObject($label) should be $expected', ({ tested, expected }) => {
  expect(isObject(tested)).toBe(expected)
})
