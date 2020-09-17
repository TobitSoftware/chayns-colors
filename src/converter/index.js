import hexToRgb255 from "./hex/hexToRgb255";
import normalizeHexString from "./hex/normalizeHexString";
import rgb255ToHex from "./hex/rgb255ToHex";
import hslToRgb1 from "./hsl/hslToRgb1";
import rgb1ToHsl from "./hsl/rgb1ToHsl";
import hsvToRgb1 from "./hsv/hsvToRgb1";
import rgb1ToHsv from "./hsv/rgb1ToHsv";
import getRgb255String from "./rgb/getRgb255String";
import normalizeRgbString from "./rgb/normalizeRgbString";
import rgb1ToRgb255 from "./rgb/rgb1ToRgb255";
import rgb255ToRgb1 from "./rgb/rgb255ToRgb1";
import checkTransparency from "../utils/checkTransparency";

function rgb255ToHsv(rgb) {
    return rgb1ToHsv(rgb255ToRgb1(rgb));
}

function rgb255ToHsl(rgb) {
    return rgb1ToHsl(rgb255ToRgb1(rgb));
}

function hexToHsv(hex) {
    return rgb255ToHsv(hexToRgb255(hex));
}

function hexToHsl(hex) {
    return rgb255ToHsl(hexToRgb255(hex));
}

function hexToRgb1(hex) {
    return rgb255ToRgb1(hexToRgb255(hex));
}

function rgb1ToHex(rgb1) {
    return rgb255ToHex(rgb1ToRgb255(rgb1));
}

function hslToRgb255(hsl) {
    return rgb1ToRgb255(hslToRgb1(hsl));
}

function hslToHex(hsl) {
    return rgb255ToHex(hslToRgb255(hsl));
}

function hsvToRgb255(hsv) {
    return rgb1ToRgb255(hsvToRgb1(hsv));
}

function hsvToHex(hsv) {
    return rgb255ToHex(hsvToRgb255(hsv));
}

function hsvToHsl(hsv) {
    return rgb255ToHsl(hsvToRgb255(hsv));
}

function hslToHsv(hsl) {
    return rgb255ToHsv(hslToRgb255(hsl));
}

export {
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
    rgb255ToHsv,
    rgb255ToHsl,
    hexToHsv,
    hslToRgb255,
    hslToHex,
    hsvToRgb255,
    hsvToHex,
    hexToHsl,
    hexToRgb1,
    rgb1ToHex,
    hsvToHsl,
    hslToHsv,
}
