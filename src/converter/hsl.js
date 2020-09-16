import hslToRgb1 from './hsl/hslToRgb1';
import rgb1ToRgb255 from './rgb/rgb1ToRgb255';
import getRgb255String from './rgb/getRgb255String';
import { rgbToHexString } from './rgb';

export function hslToRgb(hsl) {
    return rgb1ToRgb255(hslToRgb1(hsl));
}

export function hslToHexString(hsl) {
    return rgbToHexString(hslToRgb(hsl));
}

export function hslToRgbString(hsl) {
    return getRgb255String(hslToRgb(hsl));
}
