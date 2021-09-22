import { isNumber, isRgb1 } from '../../utils/is';
import type { RGB1, RGB255, RGBA1, RGBA255 } from '../../types/rgb';

export default function rgb1ToRgb255(rgb: RGB1 | RGBA1): RGB255 | RGBA255 | null {
    if (!isRgb1(rgb)) {
        return null;
    }

    return {
        r: Math.round(rgb.r * 255),
        g: Math.round(rgb.g * 255),
        b: Math.round(rgb.b * 255),
        a: ('a' in rgb && isNumber(rgb.a)) ? rgb.a : undefined,
    };
}
