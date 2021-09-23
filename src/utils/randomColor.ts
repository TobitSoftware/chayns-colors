import { rgb255ToHex } from '../converter';
import type {
    RGB1,
    RGB255,
    RGBA1,
    RGBA255,
} from '../types/rgb';

function getRandomRgb255Color({
    transparency = false,
    rgb1 = false,
} = {}): RGB255 | RGBA255 | RGB1 | RGBA1 {
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

        if (!rgb1 && component !== 'a') {
            rgb[component] = Math.round((rgb[component] || 0) * 255);
        }
    }

    return rgb as RGB255 | RGBA255 | RGB1 | RGBA1;
}

function getRandomHexColor(transparency = false): string | null {
    return rgb255ToHex(getRandomRgb255Color({ transparency }));
}

export { getRandomHexColor, getRandomRgb255Color };
