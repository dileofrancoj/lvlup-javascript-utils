import { isString } from '../check'

export function equalsIgnoreCase (a: string, b: string): boolean {
  if (!isString(a) || !isString(b)) {
    return false
  }

  return a.toLowerCase() === b.toLowerCase()
}
