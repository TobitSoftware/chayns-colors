import checkTransparency from "../../utils/checkTransparency";
import {isHsl} from "../../utils/is";

export default function hslToRgb1(hsl) {
    if (!isHsl(hsl)) {
        return null;
    }
    const {h, s, l, a} = hsl;
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        let t1;
        if (l < 0.5) {
            t1 = (l) * (1 + s);
        } else {
            t1 = l + s - (l) * (s);
        }
        let t2 = 2 * (l) - t1;
        let hue = h / 360;
        let tR = hue + (1 / 3);
        let tG = hue;
        let tB = hue - (1 / 3);
        let getColor = (t) => {
            if (t < 0) {
                t += 1;
            } else if (t > 1) {
                t -= 1;
            }
            if ((6 * t) < 1) {
                return t2 + (t1 - t2) * 6 * t;
            } else if ((2 * t) < 1) {
                return t1;
            } else if ((3 * t) < 2) {
                return t2 + (t1 - t2) * (2 / 3 - t) * 6;
            }
            return t2;
        };
        r = getColor(tR);
        g = getColor(tG);
        b = getColor(tB);
    }
    return checkTransparency({r, g, b, a});
}
