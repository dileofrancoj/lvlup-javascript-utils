import { expect, test } from 'vitest'
import { isObjectLike } from '../isObjectLike'

test.each([
  { expected: true, label: '{}', tested: {} },
  { expected: false, label: '/d+/gu', tested: /d+/gu },
  { expected: false, label: 'new Date()', tested: new Date() },
  { expected: false, label: '[]', tested: [] },
  { expected: false, label: `Symbol('')`, tested: Symbol('') },
  { expected: false, label: '() => {}', tested: () => {} },
  { expected: false, label: 'tested() {}', tested() {} },
  { expected: false, label: 'null', tested: null },
  { expected: false, label: 'undefined', tested: undefined },
  { expected: false, label: '1', tested: 1 },
  { expected: false, label: `''`, tested: '' },
])('isObjectLike($label) should be $expected', ({ tested, expected }) => {
  expect(isObjectLike(tested)).toBe(expected)
})
