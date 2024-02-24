import type { Identifiable, MaybeId } from '../types/helpers'
import { eqId } from '../misc'
import { arraylable } from './arraylable'
import { isEmpty } from '..'
export function getIndexById<T extends Identifiable> (
  dataSource: T[],
  id: MaybeId
): number {
  if (id === '' || isEmpty(dataSource)) return -1
  return arraylable(dataSource).findIndex((item: T) => eqId(item?.id, id))
}
