import { describe, expect, it } from 'vitest'
import { includes } from '../includes'

describe('includes', () => {
  it('should return true if the string contains the given substring', () => {
    expect(includes('hello', 'ell')).toBe(true)
  })

  it('should return false if the string does not contain the given substring', () => {
    expect(includes('hello', 'all')).toBe(false)
  })

  it('should return false if first argument is undefined', () => {
    // @ts-expect-error - we want to test this
    expect(includes(undefined, 'all')).toBe(false)
  })

  it('should return false if first argument is null', () => {
    // @ts-expect-error - we want to test this
    expect(includes(null, 'all')).toBe(false)
  })

  it('should return false if first argument is not as string', () => {
    // @ts-expect-error - we want to test this
    expect(includes(111, 'all')).toBe(false)
  })
})
