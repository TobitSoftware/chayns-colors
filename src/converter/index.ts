import hexToRgb255 from './hex/hexToRgb255';
import normalizeHexString from './hex/normalizeHexString';
import rgb255ToHex from './hex/rgb255ToHex';
import hslToRgb1 from './hsl/hslToRgb1';
import rgb1ToHsl from './hsl/rgb1ToHsl';
import hsvToRgb1 from './hsv/hsvToRgb1';
import rgb1ToHsv from './hsv/rgb1ToHsv';
import getRgb255String from './rgb/getRgb255String';
import normalizeRgbString from './rgb/normalizeRgbString';
import rgb1ToRgb255 from './rgb/rgb1ToRgb255';
import rgb255ToRgb1 from './rgb/rgb255ToRgb1';
import checkTransparency from '../utils/checkTransparency';

import type { RGB1, RGB255, RGBA1, RGBA255 } from '../types/rgb';
import type { HSV, HSVA } from '../types/hsv';
import type { HSL, HSLA } from '../types/hsl';

function rgb255ToHsv(rgb: RGB255 | RGBA255): HSV | HSVA | null {
  const rgb1 = rgb255ToRgb1(rgb);
  if (!rgb1) {
    return null;
  }

  return rgb1ToHsv(rgb1);
}

function rgb255ToHsl(rgb: RGB255 | RGBA255): HSL | HSLA | null {
  const rgb1 = rgb255ToRgb1(rgb);
  if (!rgb1) {
    return null;
  }

  return rgb1ToHsl(rgb1);
}

function hexToHsv(hex: string): HSV | HSVA | null {
  const rgb255 = hexToRgb255(hex);
  if (!rgb255) {
    return null;
  }

  return rgb255ToHsv(rgb255);
}

function hexToHsl(hex: string): HSL | HSLA | null {
  const rgb255 = hexToRgb255(hex);
  if (!rgb255) {
    return null;
  }

  return rgb255ToHsl(rgb255);
}

function hexToRgb1(hex: string): RGB1 | RGBA1 | null {
  const rgb255 = hexToRgb255(hex);
  if (!rgb255) {
    return null;
  }

  return rgb255ToRgb1(rgb255);
}

function rgb1ToHex(rgb1: RGB1 | RGBA1): string | null {
  const rgb255 = rgb1ToRgb255(rgb1);
  if (!rgb255) {
    return null;
  }

  return rgb255ToHex(rgb255);
}

function hslToRgb255(hsl: HSL | HSLA): RGB255 | RGBA255 | null {
  const rgb1 = hslToRgb1(hsl);
  if (!rgb1) {
    return null;
  }

  return rgb1ToRgb255(rgb1);
}

function hslToHex(hsl: HSL | HSLA): string | null {
  const rgb255 = hslToRgb255(hsl);
  if (!rgb255) {
    return null;
  }

  return rgb255ToHex(rgb255);
}

function hsvToRgb255(hsv: HSV | HSVA): RGB255 | RGBA255 | null {
  const rgb255 = hsvToRgb1(hsv);
  if (!rgb255) {
    return null;
  }

  return rgb1ToRgb255(rgb255);
}

function hsvToHex(hsv: HSV | HSVA): string | null {
  const rgb255 = hsvToRgb255(hsv);
  if (!rgb255) {
    return null;
  }

  return rgb255ToHex(rgb255);
}

function hsvToHsl(hsv: HSV | HSVA): HSL | HSLA | null {
  const rgb255 = hsvToRgb255(hsv);
  if (!rgb255) {
    return null;
  }

  return rgb255ToHsl(rgb255);
}

function hslToHsv(hsl: HSL | HSLA): HSV | HSVA | null {
  const rgb25 = hslToRgb255(hsl);
  if (!rgb25) {
    return null;
  }

  return rgb255ToHsv(rgb25);
}

export {
  hexToRgb255,
  normalizeHexString,
  rgb255ToHex,
  hslToRgb1,
  rgb1ToHsl,
  hsvToRgb1,
  rgb1ToHsv,
  getRgb255String,
  normalizeRgbString,
  rgb1ToRgb255,
  rgb255ToRgb1,
  checkTransparency,
  rgb255ToHsv,
  rgb255ToHsl,
  hexToHsv,
  hslToRgb255,
  hslToHex,
  hsvToRgb255,
  hsvToHex,
  hexToHsl,
  hexToRgb1,
  rgb1ToHex,
  hsvToHsl,
  hslToHsv,
};
