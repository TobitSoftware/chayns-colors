import { isNumber, isRgb255 } from '../../utils/is';
import type { RGB1, RGB255, RGBA1, RGBA255 } from '../../types/rgb';

export default function rgb255ToRgb1(rgb: RGB255 | RGBA255): RGB1 | RGBA1 | null {
    if (!isRgb255(rgb)) {
        return null;
    }

    return {
        r: rgb.r / 255,
        g: rgb.g / 255,
        b: rgb.b / 255,
        a: ('a' in rgb && isNumber(rgb.a)) ? rgb.a : undefined,
    };
}
