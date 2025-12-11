import {
    checkTransparency,
    hexToRgb255,
    rgb255ToHex,
    rgb1ToHsv,
    rgb1ToHsl,
    hslToRgb1,
    hsvToRgb1,
} from '../converter';
import roundValues from '../utils/roundValues';
import type {
    RGB255,
    RGBA255,
} from '../types/rgb';
import type { HSV, HSVA } from '../types/hsv';
import type { HSL, HSLA } from '../types/hsl';

function mixRgb<T extends RGB255 | RGBA255>(
    color1: T,
    color2: T,
    weightPercent = 100,
): T {
    const weight = weightPercent / 100;

    const weightColor2 = 1 - weight;

    const r = weight * color1.r + weightColor2 * color2.r;
    const g = weight * color1.g + weightColor2 * color2.g;
    const b = weight * color1.b + weightColor2 * color2.b;
    let a: number | undefined;
    if ('a' in color1 || 'a' in color2) {
        a = weight * ('a' in color1 ? color1.a : 0) + weightColor2 * ('a' in color2 ? color2.a : 0);
    }

    const color = checkTransparency({
        r,
        g,
        b,
        a,
    }) as T;

    return roundValues(color) as T;
}

function mixHex(color1: string, color2: string, weight: number): string | null {
    const color1Rgb255 = hexToRgb255(color1);
    const color2Rgb255 = hexToRgb255(color2);
    if (!color1Rgb255 || !color2Rgb255) {
        return null;
    }

    return rgb255ToHex(mixRgb(color1Rgb255, color2Rgb255, weight));
}

function mixHsv<T extends HSV | HSVA>(color1: T, color2: T, weight: number): T | null {
    const color1Rgb255 = hsvToRgb1(color1);
    const color2Rgb255 = hsvToRgb1(color2);
    if (!color1Rgb255 || !color2Rgb255) {
        return null;
    }

    return rgb1ToHsv(mixRgb(color1Rgb255, color2Rgb255, weight)) as T | null;
}

function mixHsl<T extends HSL | HSLA>(color1: T, color2: T, weight: number): T | null {
    const color1Rgb255 = hslToRgb1(color1);
    const color2Rgb255 = hslToRgb1(color2);
    if (!color1Rgb255 || !color2Rgb255) {
        return null;
    }

    return rgb1ToHsl(mixRgb(color1Rgb255, color2Rgb255, weight)) as T | null;
}

export {
    mixRgb,
    mixHex,
    mixHsl,
    mixHsv,
};
