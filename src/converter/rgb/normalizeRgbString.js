import {RGB_REGEX} from "../../utils/constants";
import getRgb255String from "./getRgb255String";
import {isString} from "../../utils/is";

export default function normalizeRgbString(rgb) {
    if (!isString(rgb)) {
        return getRgb255String(rgb);
    }
    const matches = rgb.match(RGB_REGEX);
    if (matches) {
        return getRgb255String({
            r: parseInt(matches[1], 10),
            g: parseInt(matches[2], 10),
            b: parseInt(matches[3], 10),
            a: parseInt(matches[4], 10)
        });
    } else {
        return null
    }
}
