import { isNumber, isRgb1 } from '../../utils/is';
import type { RGB1, RGBA1 } from '../../types/rgb';
import type { HSL, HSLA } from '../../types/hsl';

export default function rgb1ToHsl(rgb: RGB1 | RGBA1): HSL | HSLA | null {
    if (!isRgb1(rgb)) {
        return null;
    }

    const {
        r, g, b,
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
    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = ((max - min) / (1 - Math.abs(max + min - 1)));
    }
    const l = ((max + min) / 2);

    if ('a' in rgb && isNumber(rgb.a)) {
        return {
            h,
            s,
            l,
            a: rgb.a,
        };
    }

    return {
        h, s, l,
    };
}
