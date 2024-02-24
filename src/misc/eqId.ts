import type { MaybeId } from '../types/helpers'

export function eqId (a: MaybeId, b: MaybeId): boolean {
  return String(a) === String(b)
}
