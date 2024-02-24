import { typeOf } from '../misc'

export function isObjectLike (value: unknown): value is Record<string, unknown> {
  return (
    typeOf(value) === 'object' &&
    !Array.isArray(value) &&
    !(value instanceof Date) &&
    !(value instanceof RegExp)
  )
}
