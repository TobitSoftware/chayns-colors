import checkTransparency from "../../utils/checkTransparency";
import {isRgb255} from "../../utils/is";

export default function rgb255ToRgb1(rgb) {
    if (!isRgb255(rgb)) {
        return null;
    }
    return checkTransparency({
        r: rgb.r / 255,
        g: rgb.g / 255,
        b: rgb.b / 255,
        a: rgb.a,
    });
}
