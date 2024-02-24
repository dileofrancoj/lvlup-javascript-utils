import { expect, test } from "vitest";
import {isString} from '../isString'

test.each([
    ['', true],
    [null, false],
    [undefined, false],
    [1, false],
    [{}, false],
  ])('isString(%j) should be %j', (arg, expected) => {
    expect(isString(arg)).toBe(expected)
  })
  