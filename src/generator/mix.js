import {
  checkTransparency,
  hexToRgb255,
  rgb255ToHex,
  rgb1ToHsv,
  rgb1ToHsl,
  hslToRgb1,
  hsvToRgb1,
} from '../converter/index';
import roundValues from '../utils/roundValues';

function mixRgb(color1, color2, weightPercent = 100) {
  const weight = weightPercent / 100;

  const weightColor2 = 1 - weight;

  const r = weight * color1.r + weightColor2 * color2.r;
  const g = weight * color1.g + weightColor2 * color2.g;
  const b = weight * color1.b + weightColor2 * color2.b;
  let a = null;
  if (color1.a || color2.a) {
    a = weight * color1.a + weightColor2 * color2.a;
  }
  return roundValues(checkTransparency({
    r, g, b, a,
  }));
}

function mixHex(color1, color2, weight) {
  return rgb255ToHex(mixRgb(hexToRgb255(color1), hexToRgb255(color2), weight));
}

function mixHsv(color1, color2, weight) {
  return rgb1ToHsv(mixRgb(hsvToRgb1(color1), hsvToRgb1(color2), weight));
}

function mixHsl(color1, color2, weight) {
  return rgb1ToHsl(mixRgb(hslToRgb1(color1), hslToRgb1(color2), weight));
}

export {
  mixRgb, mixHex, mixHsl, mixHsv,
};
