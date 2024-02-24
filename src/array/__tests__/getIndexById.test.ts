import { describe, expect, it } from 'vitest'
import { getIndexById } from '../getIndexById'

describe('getIndexById', () => {
  it('should return the index of the item with the given id', () => {
    const actual = getIndexById([{ id: '1' }, { id: '2' }], '2')
    expect(actual).toBe(1)
  })

  it('should return -1 if the id is not found', () => {
    const actual = getIndexById([{ id: '1' }, { id: '2' }], '3')
    expect(actual).toBe(-1)
  })

  it('should return -1 if the id is not found and some element is nil', () => {
    const actual = getIndexById(
      // @ts-expect-error - we are testing the case where dataSource contains nil
      [{ id: '1' }, { id: '2' }, null, undefined],
      '3',
    )
    expect(actual).toBe(-1)
  })

  it('should return -1 if the dataSource is empty', () => {
    const actual = getIndexById([], '1')
    expect(actual).toBe(-1)
  })

  it('should return -1 if the dataSource is undefined', () => {
    // @ts-expect-error - we are testing the case where dataSource is undefined
    const actual = getIndexById(undefined, '1')
    expect(actual).toBe(-1)
  })

  it('should return -1 if the dataSource is null', () => {
    // @ts-expect-error - we are testing the case where dataSource is null
    const actual = getIndexById(null, '1')
    expect(actual).toBe(-1)
  })
})
