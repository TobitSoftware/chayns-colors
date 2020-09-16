import checkTransparency from "../checkTransparency";

export default function rgb255ToRgb1(rgb) {
    return checkTransparency({
        r: rgb.r / 255,
        g: rgb.g / 255,
        b: rgb.b / 255,
        a: rgb.a,
    });
}
