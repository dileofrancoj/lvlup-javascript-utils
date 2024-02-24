import { describe, expect, it } from 'vitest'
import { sumBy } from '../sumBy'

describe('sumBy', () => {
  it('should sum every single item by the given accesor', () => {
    const actual = sumBy(
      [{ value: 1 }, { value: 2 }, { value: 3 }],
      (item) => item.value
    )
    expect(actual).toBe(6)
  })
})
