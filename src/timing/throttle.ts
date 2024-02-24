/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { AnyFunction } from '../types/helpers'

export function throttle<T extends AnyFunction> (fn: T, delay: number) {
  let timeoutId: NodeJS.Timer | undefined

  return function throttledFn (...args: Parameters<T>) {
    if (timeoutId !== undefined) {
      return undefined
    }

    timeoutId = setTimeout(() => {
      timeoutId = undefined
    }, delay)

    return fn(...args)
  }
}
