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
import {HEX_REGEX, RGB_REGEX} from "./constants";

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
}
