import { RGB_REGEX } from '../../utils/constants';
import getRgb255String from './getRgb255String';
import { isString } from '../../utils/is';
import type { RGB255, RGBA255 } from '../../types/rgb';

export default function normalizeRgbString(rgb: string | RGB255 | RGBA255): string | null {
    if (!isString(rgb)) {
        return getRgb255String(rgb);
    }

    const matches = rgb.match(RGB_REGEX);
    if (matches && matches[1] && matches[2] && matches[3]) {
        return getRgb255String({
            r: parseInt(matches[1], 10),
            g: parseInt(matches[2], 10),
            b: parseInt(matches[3], 10),
            a: matches[4] ? parseInt(matches[4], 10) : undefined,
        });
    }

    return null;
}
