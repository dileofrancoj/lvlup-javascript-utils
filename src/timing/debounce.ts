/* eslint-disable @typescript-eslint/explicit-function-return-type */

import type { AnyFunction } from '../types/helpers'

export function debounce<T extends AnyFunction> (fn: T, delay: number) {
  let timeoutId: NodeJS.Timeout

  return function debouncedFn (...args: Parameters<T>) {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
