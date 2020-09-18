import {
  hexToHsl,
  hslToHex,
  hslToHsv,
  hsvToHsl,
  hslToRgb255,
  rgb255ToHsl,
} from '../converter/index';

function lightenHslColor(hsl, percent) {
  const color = hsl;
  color.l += (percent / 100);
  if (color.l > 1) {
    color.l = 1;
  } else if (color.l < 0) {
    color.l = 0;
  }
  return color;
}

function darkenHslColor(color, percent) {
  return lightenHslColor(color, percent * -1);
}

function lightenRgb255Color(color, percent) {
  return hslToRgb255(lightenHslColor(rgb255ToHsl(color), percent));
}

function darkenRgb255Color(color, percent) {
  return hslToRgb255(darkenHslColor(rgb255ToHsl(color), percent));
}

function lightenHexColor(color, percent) {
  return hslToHex(lightenHslColor(hexToHsl(color), percent));
}

function darkenHexColor(color, percent) {
  return hslToHex(darkenHslColor(hexToHsl(color), percent));
}

function lightenHsvColor(color, percent) {
  return hslToHsv(lightenHslColor(hsvToHsl(color), percent));
}

function darkenHsvColor(color, percent) {
  return hslToHsv(darkenHslColor(hsvToHsl(color), percent));
}

export {
  lightenHslColor,
  darkenHslColor,
  lightenRgb255Color,
  darkenRgb255Color,
  lightenHexColor,
  darkenHexColor,
  lightenHsvColor,
  darkenHsvColor,
};
