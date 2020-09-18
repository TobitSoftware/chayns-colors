import checkTransparency from '../../utils/checkTransparency';
import { isRgb255 } from '../../utils/is';

function componentToHex(c) {
  const hex = Math.round(c).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export default function rgb255ToHex(rgb) {
  if (!isRgb255(rgb)) {
    return null;
  }

  const r = Math.round(rgb.r);
  const g = Math.round(rgb.g);
  const b = Math.round(rgb.b);
  const a = Math.round(rgb.a * 255);

  return checkTransparency(`#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${componentToHex(a)}`);
}
