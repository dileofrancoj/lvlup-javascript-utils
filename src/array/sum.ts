import { arraylable } from './arraylable'

export function sum (data: number[]): number {
  return arraylable(data).reduce((prev, current) => prev + current, 0)
}
