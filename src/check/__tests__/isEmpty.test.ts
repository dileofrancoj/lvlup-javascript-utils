import { expect, test } from 'vitest'
import { isEmpty } from '../isEmpty'

test.each([
  { expected: true, label: '{}', tested: '{}' },
  { expected: true, label: '[]', tested: '[]' },
  { expected: true, label: 'null', tested: null },
  { expected: true, label: 'undefined', tested: undefined },
  { expected: true, label: `''`, tested: '' },
  { expected: true, label: '0', tested: 0 },
  { expected: true, label: '1', tested: 1 },
  { expected: true, label: '() => {}', tested: () => {} },
  { expected: true, label: 'tested() {}', tested() {} },
  { expected: true, label: '/d+/gu', tested: /d+/gu },
  { expected: true, label: 'new Date()', tested: new Date() },
  { expected: true, label: `Symbol('')`, tested: Symbol('') },
  { expected: false, label: `[1, 2]`, tested: [1, 2] },
  { expected: false, label: `{ foo: 1 }`, tested: { foo: 1 } as unknown }
])('isEmpty($label) should be $expected', ({ tested, expected }) => {
  expect(isEmpty(tested)).toBe(expected)
})
