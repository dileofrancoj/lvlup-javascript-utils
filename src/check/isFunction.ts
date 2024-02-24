import type { AnyFunction } from '../types/helpers'

// Type Guard: Después de esta linea de código, el tipo de value se refina a AnyFunction.
// Si la función devuelve true, Typescript tratará la variable value como si fuese AnyFunction. Esto le permite
// a typescript inferir y usar un tipo más específico en lugar de unknown

export function isFunction (value: unknown): value is AnyFunction {
  return typeof value === 'function'
}
