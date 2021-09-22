import { isNumber, isRgb255 } from '../../utils/is';
import type { RGB255, RGBA255 } from '../../types/rgb';

function componentToHex(c: number): string {
  const hex = Math.round(c).toString(16);

  return hex.length === 1 ? `0${hex}` : hex;
}

export default function rgb255ToHex(rgb: RGB255 | RGBA255) {
  if (!isRgb255(rgb)) {
    return null;
  }

  const r = Math.round(rgb.r);
  const g = Math.round(rgb.g);
  const b = Math.round(rgb.b);

  if ('a' in rgb) {
    const a = Math.round(rgb.a * 255);

    if (isNumber(rgb.a)) {
      return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${componentToHex(a)}`;
    }
  }

  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}
