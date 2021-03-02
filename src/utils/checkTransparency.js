import { isNumber, isObject, isString } from './is';

export default function checkTransparency(color, hexTransparency = false) {
  if (isString(color)) {
    if (hexTransparency) {
      return color.substring(0, 9);
    }
    return color.substring(0, 7);
  } // object
  if (!isObject(color)) {
    return null;
  }
  if (!isNumber(color.a)) {
    const { a, ...colorWithoutTransparency } = color;
    return { ...colorWithoutTransparency };
  }
  return color;
}
