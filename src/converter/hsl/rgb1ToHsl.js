import checkTransparency from "../../utils/checkTransparency";
import {isRgb1} from "../../utils/is";

export default function rgb1ToHsl(rgb) {
    if (!isRgb1(rgb)) {
        return null;
    }

    const {r, g, b, a} = rgb;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    if (max === min) {
        h = 0;
    } else if (max === r) {
        h = 60 * (((g - b) / (max - min)));
    } else if (max === g) {
        h = 60 * (2 + ((b - r) / (max - min)));
    } else if (max === b) {
        h = 60 * (4 + ((r - g) / (max - min)));
    }
    if (h < 0) {
        h += 360;
    }
    let s;
    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = ((max - min) / (1 - Math.abs(max + min - 1)));
    }
    let l = ((max + min) / 2);
    return checkTransparency({h, s, l, a});
}
