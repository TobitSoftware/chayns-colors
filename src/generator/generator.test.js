import { expect, test } from '@jest/globals';
import {
    darkenHexColor, getAvailableColorList, getColorFromPalette, lightenHexColor, mixHex,
} from './index';
import { getRandomHexColor } from '../utils/randomColor';

test('lightenDarkenTest', () => {
    let hex = '#123456';
    const light = lightenHexColor(hex, 30);
    expect(light).not.toStrictEqual(hex);
    expect(darkenHexColor(light, 30)).toStrictEqual(hex);
    hex = '#abcdef';
    const dark = darkenHexColor(hex, 15);
    expect(dark).not.toStrictEqual(hex);
    expect(lightenHexColor(dark, 15)).toStrictEqual(hex);
});

test('mixTest', () => {
    expect(mixHex('#ffffff', '#000000', 50)).toStrictEqual('#808080');
});

test('primaryColorTest', () => {
    const color = getRandomHexColor();
    expect(getColorFromPalette('primary', { color })).toStrictEqual(color);
});

test('getAvailableColorList', () => {
    expect(getAvailableColorList()).toBeInstanceOf(Object);
});

test('generateColors', () => {
    for (let colorMode = 0; colorMode <= 2; colorMode += 1) {
        const color = getRandomHexColor();
        getAvailableColorList().forEach((colorId) => {
            const generatedColor = getColorFromPalette(colorId, { color, colorMode });
            expect(generatedColor).toHaveLength(7);
        });
    }
});
