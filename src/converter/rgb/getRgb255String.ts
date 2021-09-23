import { isNumber, isRgb255 } from '../../utils/is';
import type { RGB255, RGBA255 } from '../../types/rgb';

export default function getRgb255String(rgb: RGB255 | RGBA255) {
    if (!isRgb255(rgb)) {
        return null;
    }

    if ('a' in rgb && isNumber(rgb.a)) {
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a.toLocaleString('en-US', {
            maximumFractionDigits: 2,
        })})`;
    }

    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}
