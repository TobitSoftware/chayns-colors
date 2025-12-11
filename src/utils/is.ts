import { HEX_REGEX, RGB_REGEX } from './constants';
import type {
    RGB1,
    RGB255,
    RGBA1,
    RGBA255,
} from '../types/rgb';
import type { HSL, HSLA } from '../types/hsl';
import type { HSV, HSVA } from '../types/hsv';

export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
    return typeof value === 'number' && !Number.isNaN(value);
}

export function isNullOrUndefined(value: unknown): value is (null | undefined) {
    return value === undefined || value === null || Number.isNaN(value);
}

export function isObject(value: unknown): value is Record<string | number | symbol, unknown> {
    return typeof value === 'object' && value !== null;
}

export function isInInterval(value: unknown, min: number, max: number) {
    return isNumber(value) && value >= min && value <= max;
}

export function isHex(value: string): boolean {
    return HEX_REGEX.test(value);
}

export function isRgbString(value: string): boolean {
    return RGB_REGEX.test(value);
}

export function isRgb255(value: unknown): value is (RGB255 | RGBA255) {
    return (isObject(value)
        && isInInterval(value.r, 0, 255)
        && isInInterval(value.g, 0, 255)
        && isInInterval(value.b, 0, 255)
        && (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}

export function isRgb1(value: unknown): value is (RGB1 | RGBA1) {
    return (isObject(value)
        && isInInterval(value.r, 0, 1)
        && isInInterval(value.g, 0, 1)
        && isInInterval(value.b, 0, 1)
        && (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}

export function isHsl(value: unknown): value is (HSL | HSLA) {
    return (isObject(value)
        && isInInterval(value.h, 0, 360)
        && isInInterval(value.s, 0, 1)
        && isInInterval(value.l, 0, 1)
        && (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}

export function isHsv(value: unknown): value is (HSV | HSVA) {
    return (isObject(value)
        && isInInterval(value.h, 0, 360)
        && isInInterval(value.s, 0, 1)
        && isInInterval(value.v, 0, 1)
        && (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}
