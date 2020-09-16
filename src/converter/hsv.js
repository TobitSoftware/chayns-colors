import hsvToRgb1 from './hsv/hsvToRgb1';
import rgb1ToRgb255 from './rgb/rgb1ToRgb255';
import getRgb255String from './rgb/getRgb255String';
import { rgbToHexString } from './rgb';

export function hsvToRgb(hsv) {
    return rgb1ToRgb255(hsvToRgb1(hsv));
}

export function hsvToHexString(hsv) {
    return rgbToHexString(hsvToRgb(hsv));
}

export function hsvToRgbString(hsv) {
    return getRgb255String(hsvToRgb(hsv));
}
