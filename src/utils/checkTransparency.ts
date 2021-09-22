import { isNumber, isObject, isString } from './is';
import type { RGB1, RGB255, RGBA1, RGBA255 } from '../types/rgb';
import type { HSV, HSVA } from '../types/hsv';
import type { HSL, HSLA } from '../types/hsl';

type ColorObject = RGB1 | RGBA1 | RGB255 | RGBA255 | HSV | HSVA | HSL | HSLA;

/**
 * Removes the transparency part of the color
 * @param color
 * @param hexTransparency
 */
export default function checkTransparency(color: string | ColorObject, hexTransparency = false): (string | ColorObject | null) {
  if (isString(color)) {
    if (hexTransparency) {
      return color.substring(0, 9);
    }
    return color.substring(0, 7);
  } // object
  if (!isObject(color)) {
    return null;
  }
  if ('a' in color && !isNumber(color)) {
    const { a, ...colorWithoutTransparency } = color;
    return { ...colorWithoutTransparency };
  }
  return color;
}
