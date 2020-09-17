import {HEX_REGEX} from "../constants";
import {isString} from "../../utils/is";

export default function normalizeHexString(hex) {
    if (!isString(hex)) {
        return null;
    }
    const matches = hex.match(HEX_REGEX);

    if (matches) {
        return `#${matches[1]}`;
    } else {
        return null
    }
}
