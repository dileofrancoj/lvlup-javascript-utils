import { typeOf } from '../misc/typeOf'

export function isObject (value: unknown): boolean {
  return typeOf(value) === 'object'
}
