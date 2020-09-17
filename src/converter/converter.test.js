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
    rgb255ToHsv,
    rgb255ToHsl,
    hexToHsv,
    hslToRgb255,
    hslToHex,
    hsvToRgb255,
    hsvToHex,
    hexToHsl, hexToRgb1, rgb1ToHex, hslToHsv, hsvToHsl,
} from "./index";
import {expect, test} from "@jest/globals";
import {getRandomHexColor, getRandomRgb255Color} from "../utils/randomColor";
import {RGB_REGEX} from "../utils/constants";

test('hexToRgbToHex', () => {
    let color = getRandomHexColor();
    expect(rgb255ToHex(hexToRgb255(color))).toStrictEqual(color);
    color = getRandomHexColor(true);
    expect(rgb255ToHex(hexToRgb255(color))).toStrictEqual(color);
})

test('normalizeHexString', () => {
    let color = getRandomHexColor();
    expect(normalizeHexString(color)).toStrictEqual(color);
    expect(normalizeHexString(color.substring(1))).toStrictEqual(color);
})

test('normalizeRgbString', () => {
    let color = getRandomRgb255Color();
    expect(normalizeRgbString(color)).toMatch(RGB_REGEX);
})

test('rgbToHslToRgb', () => {
    let color = getRandomRgb255Color();
    expect(hslToRgb255(rgb255ToHsl(color))).toStrictEqual(color);
    color = getRandomRgb255Color({transparency: true});
    expect(hslToRgb255(rgb255ToHsl(color))).toStrictEqual(color);
})

test('rgbToHsvToRgb', () => {
    let color = getRandomRgb255Color();
    expect(hsvToRgb255(rgb255ToHsv(color))).toStrictEqual(color);
    color = getRandomRgb255Color({transparency: true});
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
        expect(hexToRgb1(invalidValue)).toBe(null);
        expect(rgb1ToHex(invalidValue)).toBe(null);
        expect(hsvToHsl(invalidValue)).toBe(null);
        expect(hslToHsv(invalidValue)).toBe(null);
    })
})

test('rgbString', () => {
    const rgbString = getRgb255String({r: 0, g: 100, b: 200});
    expect(rgbString).toStrictEqual('rgb(0, 100, 200)');
    expect(normalizeRgbString(rgbString)).toStrictEqual('rgb(0, 100, 200)');
});
