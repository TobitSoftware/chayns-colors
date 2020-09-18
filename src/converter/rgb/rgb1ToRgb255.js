import checkTransparency from '../../utils/checkTransparency';
import { isRgb1 } from '../../utils/is';

export default function rgb1ToRgb255(rgb) {
  if (!isRgb1(rgb)) {
    return null;
  }
  return checkTransparency({
    r: Math.round(rgb.r * 255),
    g: Math.round(rgb.g * 255),
    b: Math.round(rgb.b * 255),
    a: rgb.a,
  });
}
