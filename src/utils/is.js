import {HEX_REGEX, RGB_REGEX} from "./constants";

export function isString(value) {
    return typeof value === 'string';
}

export function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

export function isNullOrUndefined(value) {
    return value === undefined || value === null || isNaN(value);
}

export function isObject(value) {
    return typeof value === 'object' && value !== null;
}

export function isInInterval(value, min, max) {
    return isNumber(value) && value >= min && value <= max;
}

export function isHex(value) {
    return HEX_REGEX.test(value);
}

export function isRgbString(value) {
    return RGB_REGEX.test(value);
}

export function isRgb255(value) {
    return (isObject(value) &&
        isInInterval(value.r, 0, 255) &&
        isInInterval(value.g, 0, 255) &&
        isInInterval(value.b, 0, 255) &&
        (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}

export function isRgb1(value) {
    return (isObject(value) &&
        isInInterval(value.r, 0, 1) &&
        isInInterval(value.g, 0, 1) &&
        isInInterval(value.b, 0, 1) &&
        (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}

export function isHsl(value) {
    return (isObject(value) &&
        isInInterval(value.h, 0, 360) &&
        isInInterval(value.s, 0, 1) &&
        isInInterval(value.l, 0, 1) &&
        (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}

export function isHsv(value) {
    return (isObject(value) &&
        isInInterval(value.h, 0, 360) &&
        isInInterval(value.s, 0, 1) &&
        isInInterval(value.v, 0, 1) &&
        (isNullOrUndefined(value.a) || isInInterval(value.a, 0, 1)));
}
