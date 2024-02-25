import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { debounce } from '../debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should debounce a function', () => {
    const originalFn = vi.fn()
    const debouncedFn = debounce(originalFn, 1000)

    debouncedFn(1)
    debouncedFn(2)
    debouncedFn(3)
    debouncedFn(4)
    debouncedFn(5)
    vi.advanceTimersByTime(1100)

    expect(originalFn).toHaveBeenCalledTimes(1)
    expect(originalFn).toHaveBeenNthCalledWith(1, 5)
  })
})
