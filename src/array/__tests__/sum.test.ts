import { describe, expect, it } from 'vitest'
import { sum } from '../sum'

describe('sumBy', () => {
  it('should sum every single item', () => {
    const actual = sum([1, 2, 3])
    expect(actual).toBe(6)
  })
})
