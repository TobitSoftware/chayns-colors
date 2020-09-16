import {isNumber} from "../../utils/is";

export default function getRgb255String(rgb) {
    return `rgb${isNumber(rgb.a) ? 'a' : ''}(${rgb.r}, ${rgb.g}, ${rgb.b}${transparency ? `, ${rgb.a.toLocaleString('en-US', {
        maximumFractionDigits: 2,
    })}` : ''})`;
}


