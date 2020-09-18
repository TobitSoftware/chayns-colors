import checkTransparency from '../../utils/checkTransparency';
import { isHsl } from '../../utils/is';

export default function hslToRgb1(hsl) {
  if (!isHsl(hsl)) {
    return null;
  }
  const {
    h, s, l, a,
  } = hsl;
  let r;
  let g;
  let
    b;

  if (s === 0) {
    r = l;
    g = l;
    b = l;
  } else {
    let t1;
    if (l < 0.5) {
      t1 = (l) * (1 + s);
    } else {
      t1 = l + s - (l) * (s);
    }
    const t2 = 2 * (l) - t1;
    const hue = h / 360;
    const tR = hue + (1 / 3);
    const tG = hue;
    const tB = hue - (1 / 3);
    const getColor = (tt) => {
      let t = tt;
      if (t < 0) {
        t += 1;
      } else if (t > 1) {
        t -= 1;
      }
      if ((6 * t) < 1) {
        return t2 + (t1 - t2) * 6 * t;
      }
      if ((2 * t) < 1) {
        return t1;
      }
      if ((3 * t) < 2) {
        return t2 + (t1 - t2) * (2 / 3 - t) * 6;
      }
      return t2;
    };
    r = getColor(tR);
    g = getColor(tG);
    b = getColor(tB);
  }
  return checkTransparency({
    r, g, b, a,
  });
}
