import {HEX_REGEX} from "../constants";

export default function normalizeHexString(hex) {
    const matches = hex.match(HEX_REGEX);

    if (matches) {
        return `#${matches[1]}`;
    } else {
        return null
    }
}
