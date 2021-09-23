import { HEX_REGEX } from '../../utils/constants';
import { isHex, isNumber } from '../../utils/is';
import type { RGB255, RGBA255 } from '../../types/rgb';

export default function hexToRgb255(hex: string): RGB255 | RGBA255 | null {
    if (!isHex(hex)) {
        return null;
    }

    const components = hex.match(HEX_REGEX);
    if (!components?.[1]) {
        return null;
    }

    const retObj = {
        r: parseInt(components[1].substring(0, 2), 16),
        g: parseInt(components[1].substring(2, 4), 16),
        b: parseInt(components[1].substring(4, 6), 16),
    };

    const a = parseInt(components[1].substring(6, 8), 16) / 255;
    if (isNumber(a)) {
        return {
            ...retObj,
            a,
        };
    }

    return retObj;
}
