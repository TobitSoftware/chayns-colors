import {rgb255ToHex} from "../converter";

function getRandomRgb255Color({transparency = false, rgb1 = false} = {}) {
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

function getRandomHexColor(transparency = false) {
    return rgb255ToHex(getRandomRgb255Color({transparency}));
}

export {getRandomHexColor, getRandomRgb255Color};
