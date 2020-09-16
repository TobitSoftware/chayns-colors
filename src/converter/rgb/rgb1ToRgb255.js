import checkTransparency from "../checkTransparency";

export default function rgb1ToRgb255(rgb) {
    return checkTransparency({
        r: Math.round(rgb.r * 255),
        g: Math.round(rgb.g * 255),
        b: Math.round(rgb.b * 255),
        a: rgb.a,
    });
}
