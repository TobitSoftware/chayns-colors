import {
    hexToHsl,
    hslToHex,
    hslToHsv,
    hsvToHsl,
    hslToRgb255,
    rgb255ToHsl,
} from '../converter';
import type { HSL, HSLA } from '../types/hsl';
import type { RGB255, RGBA255 } from '../types/rgb';
import type { HSV, HSVA } from '../types/hsv';

function lightenHslColor<T extends HSL | HSLA>(hsl: T, percent: number): T {
    const color = { ...hsl };

    color.l += (percent / 100);

    if (color.l > 1) {
        color.l = 1;
    } else if (color.l < 0) {
        color.l = 0;
    }

    return color;
}

function darkenHslColor<T extends HSL | HSLA>(color: T, percent: number): T {
    return lightenHslColor(color, percent * -1);
}

function lightenRgb255Color<T extends RGB255 | RGBA255>(color: T, percent: number): T | null {
    const hsl = rgb255ToHsl(color);
    if (!hsl) {
        return null;
    }

    return hslToRgb255(lightenHslColor(hsl, percent)) as T | null;
}

function darkenRgb255Color<T extends RGB255 | RGBA255>(color: T, percent: number): T | null {
    const hsl = rgb255ToHsl(color);
    if (!hsl) {
        return null;
    }

    return hslToRgb255(darkenHslColor(hsl, percent)) as T | null;
}

function lightenHexColor(color: string, percent: number): string | null {
    const hsl = hexToHsl(color);
    if (!hsl) {
        return null;
    }

    return hslToHex(lightenHslColor(hsl, percent));
}

function darkenHexColor(color: string, percent: number): string | null {
    const hsl = hexToHsl(color);
    if (!hsl) {
        return null;
    }

    return hslToHex(darkenHslColor(hsl, percent));
}

function lightenHsvColor<T extends HSV | HSVA>(color: T, percent: number): T | null {
    const hsl = hsvToHsl(color);
    if (!hsl) {
        return null;
    }

    return hslToHsv(lightenHslColor(hsl, percent)) as T | null;
}

function darkenHsvColor<T extends HSV | HSVA>(color: T, percent: number): T | null {
    const hsl = hsvToHsl(color);
    if (!hsl) {
        return null;
    }

    return hslToHsv(darkenHslColor(hsl, percent)) as T | null;
}

export {
    lightenHslColor,
    darkenHslColor,
    lightenRgb255Color,
    darkenRgb255Color,
    lightenHexColor,
    darkenHexColor,
    lightenHsvColor,
    darkenHsvColor,
};
