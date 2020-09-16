import { rgbToHsv, rgbToRgbString } from './rgb';
import hexToRgb255 from './hex/hexToRgb255';

export function hexStringToRgb(hex) {
    return hexToRgb255(hex);
}

export function hexStringToHsv(hex) {
    return rgbToHsv(hexStringToRgb(hex));
}

export function hexStringToRgbString(hex) {
    return rgbToRgbString(hexStringToRgb(hex));
}
