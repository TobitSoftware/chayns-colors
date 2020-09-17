import {RGB_REGEX} from "../constants";
import getRgb255String from "./getRgb255String";
import {isString} from "../../utils/is";

export default function normalizeRgbString(rgb) {
    if (!isString(rgb)) {
        return getRgb255String(rgb);
    }
    const matches = rgb.match(RGB_REGEX);

    if (matches) {
        return getRgb255String({r: matches[1], g: matches[2], b: matches[3], a: matches[4]});
    } else {
        return null
    }
}
