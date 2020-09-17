import {isNumber, isRgb255} from "../../utils/is";

export default function getRgb255String(rgb) {
    if (!isRgb255(rgb)) {
        return null;
    }

    return `rgb${isNumber(rgb.a) ? 'a' : ''}(${rgb.r}, ${rgb.g}, ${rgb.b}${isNumber(rgb.a) ? `, ${rgb.a.toLocaleString('en-US', {
        maximumFractionDigits: 2,
    })}` : ''})`;
}
