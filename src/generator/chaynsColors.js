import { darkenHexColor, lightenHexColor } from './lightenDarken';
import { hexToHsl } from '../converter';
import { colorPalette, specials } from './constants';
import { mixHex } from './mix';
import hexToRgb255 from '../converter/hex/hexToRgb255';

function getColorBrightness(color, newCalculation) {
  const rgb = hexToRgb255(color);

  const brightnessRgb = Math.max(rgb.r, rgb.g, rgb.b);

  let brightness;
  if (newCalculation) {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);
    brightness = (((max + min) / 2) / 255) * 100;
  } else if (brightnessRgb < 64) {
    brightness = 40;
  } else if (brightnessRgb < 128) {
    brightness = 60;
  } else if (brightnessRgb < 192) {
    brightness = 80;
  } else {
    brightness = 100;
  }

  return brightness;
}

function getAvailableColorList() {
  return Object.keys(colorPalette[0]);
}

function getColorFromPalette(colorId, { color = '#808080', colorMode = 0, secondaryColor = null }) {
  const colorData = JSON.parse(JSON.stringify(colorPalette[colorMode][colorId])); // copy array

  let secondary;
  if (!secondaryColor) {
    secondary = color;
  } else {
    secondary = secondaryColor;
  }

  const colorIndex = colorData.indexOf(specials.COLOR);
  if (colorIndex >= 0) {
    colorData[colorIndex] = color;
  }
  const secondaryColorIndex = colorData.indexOf(specials.SECONDARY_COLOR);
  if (secondaryColorIndex >= 0) {
    colorData[secondaryColorIndex] = secondary;
  }
  const brightnessIndex = colorData.indexOf(specials.BRIGHTNESS);
  if (brightnessIndex >= 0) {
    colorData[brightnessIndex] = getColorBrightness(color, false);
  }
  const newBrightnessIndex = colorData.indexOf(specials.NEW_BRIGHTNESS);
  if (newBrightnessIndex >= 0) {
    colorData[newBrightnessIndex] = getColorBrightness(color, true);
  }
  const base400Index = colorData.indexOf(specials.BASE400);
  if (base400Index >= 0) {
    const brightness = getColorBrightness(color);
    if (brightness < 50 && colorMode === 1) {
      colorData[base400Index] = lightenHexColor(color, (brightness * -1 + 100) * 0.5);
    } else if (brightness === 100 && hexToHsl(color).s < 0.15) {
      colorData[base400Index] = '#a8a8a8';
    } else {
      colorData[base400Index] = color;
    }
  }
  const accent400Index = colorData.indexOf(specials.ACCENT400);
  if (accent400Index >= 0) {
    const brightness = getColorBrightness(color);
    if (brightness < 50) {
      colorData[accent400Index] = darkenHexColor('#2F2F2F', (brightness * -1 + 100) * 0.1);
    } else {
      colorData[accent400Index] = '#2F2F2F';
    }
  }
  const secondaryBase400Index = colorData.indexOf(specials.SECONDARY_BASE400);
  if (secondaryBase400Index >= 0) {
    const brightness = getColorBrightness(secondary);
    if (brightness < 50 && colorMode === 1) {
      colorData[secondaryBase400Index] = lightenHexColor(secondary, (brightness * -1 + 100) * 0.5);
    } else if (brightness === 100 && hexToHsl(secondary).s < 15) {
      colorData[secondaryBase400Index] = '#a8a8a8';
    } else {
      colorData[secondaryBase400Index] = secondary;
    }
  }
  const secondaryAccent400Index = colorData.indexOf(specials.SECONDARY_ACCENT400);
  if (secondaryAccent400Index >= 0) {
    const brightness = getColorBrightness(secondary);
    if (brightness < 50) {
      colorData[secondaryAccent400Index] = darkenHexColor('#2F2F2F', (brightness * -1 + 100) * 0.1);
    } else {
      colorData[secondaryAccent400Index] = '#2F2F2F';
    }
  }

  if (Array.isArray(colorData)) {
    if (colorData.length === 2) {
      return mixHex(color, colorData[0], colorData[1]);
    }
    if (colorData.length === 3) {
      return mixHex(colorData[0], colorData[1], colorData[2]);
    }
  }
  return colorData;
}

export { getColorFromPalette, getAvailableColorList };
