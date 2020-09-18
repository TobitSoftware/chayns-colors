import { isNumber, isObject, isString } from './is';

export default function checkTransparency(color) {
  if (isString(color)) {
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
