import type { Identifiable, MaybeId } from '../types/helpers'
import { eqId } from '../misc'
import { arraylable } from './arraylable'

export function getById<T extends Identifiable> (dataSource: T[], id: MaybeId): T | undefined {
  return arraylable(dataSource).find((item: T) => eqId(item?.id, id))
}
