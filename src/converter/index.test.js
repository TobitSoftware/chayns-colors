import {rgbToHexString, hexStringToRgb, hslToRgb, rgbToHsl} from "./index";
import {expect, test} from "@jest/globals";
import {rgbToHsv} from "./rgb";
import {hsvToRgb} from "./hsv";

function getRandomRgb({transparency = false, rgb1 = false} = {}) {
    const rgb = {r: null, g: null, b: null};
    if (transparency) {
        rgb.a = null;
    }
    for (const component of Object.keys(rgb)) {
        rgb[component] = Math.random();
        if (!rgb1) {
            rgb[component] = Math.round(rgb[component] * 255);
        }
    }
    return rgb;
}

function getRandomHex(transparency = false) {
    return rgbToHexString(getRandomRgb({transparency}));
}

test('hexToRgbToHex', () => {
    let color = getRandomHex();
    expect(rgbToHexString(hexStringToRgb(color))).toStrictEqual(color);
    color = getRandomHex(true);
    expect(rgbToHexString(hexStringToRgb(color))).toStrictEqual(color);
})

test('rgbToHslToRgb', () => {
    let color = getRandomRgb();
    expect(hslToRgb(rgbToHsl(color))).toStrictEqual(color);
    color = getRandomRgb({transparency: true});
    expect(hslToRgb(rgbToHsl(color))).toStrictEqual(color);
})

test('rgbToHsvToRgb', () => {
    let color = getRandomRgb();
    expect(hsvToRgb(rgbToHsv(color))).toStrictEqual(color);
    color = getRandomRgb({transparency: true});
    expect(hsvToRgb(rgbToHsv(color))).toStrictEqual(color);
})
