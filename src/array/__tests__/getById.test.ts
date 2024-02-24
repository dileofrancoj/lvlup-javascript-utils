import { describe, expect, it } from 'vitest'
import { getById } from '../getById'

describe('getById', () => {
  it('should return the item with the given id', () => {
    const dataSource = [{ id: '1' }, { id: '2' }]
    const actual = getById(dataSource, '2')
    expect(actual).toStrictEqual({ id: '2' })
  })

  it('should return undefined if the id is not found', () => {
    const dataSource = [{ id: '1' }, { id: '2' }]
    expect(getById(dataSource, '3')).toBeUndefined()
  })

  it('should return undefined if the dataSource is empty', () => {
    const dataSource = []
    const actual = getById(dataSource, '1')
    console.log('actual: ', actual )
    expect(actual).toBeUndefined()
  })

  it('should return undefined if the dataSource is undefined', () => {
    const dataSource = undefined
    // @ts-expect-error - we are testing the case where dataSource is null
    const actual = getById(dataSource, '1')
    expect(actual).toBeUndefined()
  })

  it('should return undefined if the dataSource is null', () => {
    const dataSource = null
  })
})
