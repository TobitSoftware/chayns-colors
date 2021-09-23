import { rgb255ToHex } from '../converter';
import type {
    RGB255,
    RGBA255,
} from '../types/rgb';

function getRandomRgb255Color<T extends boolean = false>(
    transparency: T | undefined = undefined,
): T extends true ? RGBA255 : RGB255 {
    const rgb: {
        r: number | null;
        g: number | null;
        b: number | null;
        a?: number | null;
    } = {
        r: null,
        g: null,
        b: null,
    };

    if (transparency) {
        rgb.a = null;
    }

    for (let i = 0; i < Object.keys(rgb).length; i += 1) {
        const component = Object.keys(rgb)[i] as 'r' | 'g' | 'b' | 'a';
        rgb[component] = Math.random();

        if (component !== 'a') {
            rgb[component] = Math.round((rgb[component] || 0) * 255);
        }
    }

    return rgb as (T extends true ? RGBA255 : RGB255);
}

function getRandomHexColor(transparency = false): string | null {
    return rgb255ToHex(getRandomRgb255Color(transparency));
}

export { getRandomHexColor, getRandomRgb255Color };
