import {
    hexToRgb255,
    normalizeHexString,
    rgb255ToHex,
    hslToRgb1,
    rgb1ToHsl,
    hsvToRgb1,
    rgb1ToHsv,
    getRgb255String,
    normalizeRgbString,
    rgb1ToRgb255,
    rgb255ToRgb1,
    checkTransparency,
    HEX_REGEX,
    RGB_REGEX,
    rgb255ToHsv,
    rgb255ToHsl,
    hexToHsv,
    hslToRgb255,
    hslToHex,
    hsvToRgb255,
    hsvToHex,
    hexToHsl,
} from "./index";
import {expect, test} from "@jest/globals";

function getRandomRgb({transparency = false, rgb1 = false} = {}) {
    const rgb = {r: null, g: null, b: null};
    if (transparency) {
        rgb.a = null;
    }
    for (const component of Object.keys(rgb)) {
        rgb[component] = Math.random();
        if (!rgb1 && component !== 'a') {
            rgb[component] = Math.round(rgb[component] * 255);
        }
    }
    return rgb;
}

function getRandomHex(transparency = false) {
    return rgb255ToHex(getRandomRgb({transparency}));
}

test('hexToRgbToHex', () => {
    let color = getRandomHex();
    expect(rgb255ToHex(hexToRgb255(color))).toStrictEqual(color);
    color = getRandomHex(true);
    expect(rgb255ToHex(hexToRgb255(color))).toStrictEqual(color);
})

test('normalizeHexString', () => {
    let color = getRandomHex();
    expect(normalizeHexString(color)).toStrictEqual(color);
    expect(normalizeHexString(color.substring(1))).toStrictEqual(color);
})

test('normalizeRgbString', () => {
    let color = getRandomRgb();
    expect(normalizeRgbString(color)).toMatch(RGB_REGEX);
})

test('rgbToHslToRgb', () => {
    let color = getRandomRgb();
    expect(hslToRgb255(rgb255ToHsl(color))).toStrictEqual(color);
    color = getRandomRgb({transparency: true});
    expect(hslToRgb255(rgb255ToHsl(color))).toStrictEqual(color);
})

test('rgbToHsvToRgb', () => {
    let color = getRandomRgb();
    expect(hsvToRgb255(rgb255ToHsv(color))).toStrictEqual(color);
    color = getRandomRgb({transparency: true});
    expect(hsvToRgb255(rgb255ToHsv(color))).toStrictEqual(color);
})

test('invalid values test', () => {
    const invalidValues = [null, undefined, 0, 1, -1, '', false, true, [], {}, '#-1xyz0', {r: 0}, {
        r: -1,
        g: -1,
        b: -1,
        a: -1,
        h: -1,
        s: -1,
        v: -1,
        l: -1
    }];
    invalidValues.forEach((invalidValue) => {
        expect(hexToRgb255(invalidValue)).toBe(null);
        expect(normalizeHexString(invalidValue)).toBe(null);
        expect(rgb255ToHex(invalidValue)).toBe(null);
        expect(hslToRgb1(invalidValue)).toBe(null);
        expect(rgb1ToHsl(invalidValue)).toBe(null);
        expect(hsvToRgb1(invalidValue)).toBe(null);
        expect(rgb1ToHsv(invalidValue)).toBe(null);
        expect(getRgb255String(invalidValue)).toBe(null);
        expect(normalizeRgbString(invalidValue)).toBe(null);
        expect(rgb1ToRgb255(invalidValue)).toBe(null);
        expect(rgb255ToRgb1(invalidValue)).toBe(null);
        expect(rgb255ToHsv(invalidValue)).toBe(null);
        expect(rgb255ToHsl(invalidValue)).toBe(null);
        expect(hexToHsv(invalidValue)).toBe(null);
        expect(hslToRgb255(invalidValue)).toBe(null);
        expect(hslToHex(invalidValue)).toBe(null);
        expect(hsvToRgb255(invalidValue)).toBe(null);
        expect(hsvToHex(invalidValue)).toBe(null);
        expect(hexToHsl(invalidValue)).toBe(null);
        checkTransparency(invalidValue);
    })
})
