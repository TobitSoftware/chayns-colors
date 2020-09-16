import rgb255ToRgb1 from './rgb/rgb255ToRgb1';
import rgb1ToHsv from './hsv/rgb1ToHsv';
import rgb255ToHex from './hex/rgb255ToHex';
import getRgb255String from './rgb/getRgb255String';
import rgb1ToHsl from "./hsl/rgb1ToHsl";

export function rgbToHsv(rgb) {
    return rgb1ToHsv(rgb255ToRgb1(rgb));
}

export function rgbToHexString(rgb) {
    const lRgb = {
        ...rgb,
    };

    return rgb255ToHex(lRgb);
}

export function rgbToRgbString(rgb) {
    return getRgb255String(rgb);
}

export function rgbToHsl(rgb) {
    return rgb1ToHsl(rgb255ToRgb1(rgb));
}
