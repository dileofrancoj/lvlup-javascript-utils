import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { throttle } from '../throttle'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should throttle a function', () => {
    const originalFn = vi.fn()
    const throttledFn = throttle(originalFn, 1000)

    throttledFn(1)
    throttledFn(2)
    throttledFn(3)
    vi.advanceTimersByTime(1100)
    throttledFn(6)
    throttledFn(7)

    expect(originalFn).toHaveBeenCalledTimes(2)
    expect(originalFn).toHaveBeenNthCalledWith(1, 1)
    expect(originalFn).toHaveBeenNthCalledWith(2, 6)
  })
})
