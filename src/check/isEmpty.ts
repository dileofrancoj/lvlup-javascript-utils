export function isEmpty (object: unknown): boolean {
  const safeObject = object

  const isCountable =
    safeObject instanceof Object || safeObject instanceof Array

  if (!isCountable) return true

  return Object.entries(safeObject).length === 0
}
