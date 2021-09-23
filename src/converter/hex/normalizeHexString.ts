import { HEX_REGEX, SHORT_HEX_REGEX } from '../../utils/constants';
import { isString } from '../../utils/is';

export default function normalizeHexString(hex: string): string | null {
    if (!isString(hex)) {
        return null;
    }

    let matches = hex.match(HEX_REGEX);
    if (matches) {
        return `#${matches[1]}`;
    }

    matches = hex.match(SHORT_HEX_REGEX);
    if (matches) {
        return `#${matches[1]}${matches[1]}`;
    }

    if (hex === 'gray') {
        return '#808080';
    }

    return null;
}
