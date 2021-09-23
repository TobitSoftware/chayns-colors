import { isNumber, isRgb1 } from '../../utils/is';
import type { RGB1, RGBA1 } from '../../types/rgb';
import type { HSV, HSVA } from '../../types/hsv';

export default function rgb1ToHsv(rgb: RGB1 | RGBA1): HSV | HSVA | null {
    if (!isRgb1(rgb)) {
        return null;
    }
    const {
        r,
        g,
        b,
    } = rgb;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h: number = 0;
    if (max === min) {
        h = 0;
    } else if (max === r) {
        h = 60 * (((g - b) / (max - min)));
    } else if (max === g) {
        h = 60 * (2 + ((b - r) / (max - min)));
    } else if (max === b) {
        h = 60 * (4 + ((r - g) / (max - min)));
    }
    if (h < 0) {
        h += 360;
    }
    let s;
    if (max === 0) {
        s = 0;
    } else {
        s = (max - min) / max;
    }
    const v = max;

    if ('a' in rgb && !isNumber(rgb.a)) {
        return {
            h,
            s,
            v,
            a: rgb.a,
        };
    }

    return {
        h, s, v,
    };
}
