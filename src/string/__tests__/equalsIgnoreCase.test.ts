import { describe, expect, it } from 'vitest'
import { equalsIgnoreCase } from '../equalsIgnoreCase'

describe('equalsIgnoreCase', () => {
  it('should return `true` when strings are equals', () => {
    expect(equalsIgnoreCase('foo', 'FoO')).toBe(true)
  })

  it('should return `true` when strings are identical', () => {
    expect(equalsIgnoreCase('foo', 'foo')).toBe(true)
  })

  it('should return `false` when strings contains whitespaces', () => {
    expect(equalsIgnoreCase('foo', 'foo ')).toBe(false)
  })

  it('should return `false` if the first arg is not an string', () => {
    // @ts-expect-error - we are testing the case where the first arg is not a string
    expect(equalsIgnoreCase(1, 'FoO')).toBe(false)
  })

  it('should return `false` if the second arg is not an string', () => {
    // @ts-expect-error - we are testing the case where the second arg is not a string
    expect(equalsIgnoreCase('FoO', 1)).toBe(false)
  })
})
