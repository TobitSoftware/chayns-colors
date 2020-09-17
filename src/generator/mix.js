import {
    checkTransparency,
    hexToRgb255,
    hslToRgb255,
    hsvToRgb255,
    rgb255ToHex,
    rgb255ToHsl,
    rgb255ToHsv
} from "../converter";
import roundValues from "../utils/roundValues";

function mixRgb255(color1, color2, weight = 100) {
    weight /= 100;

    const weightColor2 = 1 - weight;

    const r = weight * color1.r + weightColor2 * color2.r;
    const g = weight * color1.g + weightColor2 * color2.g;
    const b = weight * color1.b + weightColor2 * color2.b;
    let a = null;
    if (color1.a || color2.a) {
        a = weight * color1.a + weightColor2 * color2.a;
    }

    return roundValues(checkTransparency({r, g, b, a}));
}

function mixHex(color1, color2, weight) {
    rgb255ToHex(mixRgb255(hexToRgb255(color1), hexToRgb255(color2), weight));
}

function mixHsv(color1, color2, weight) {
    rgb255ToHsv(mixRgb255(hsvToRgb255(color1), hsvToRgb255(color2), weight));
}

function mixHsl(color1, color2, weight) {
    rgb255ToHsl(mixRgb255(hslToRgb255(color1), hslToRgb255(color2), weight));
}

export {mixRgb255, mixHex, mixHsl, mixHsv};

