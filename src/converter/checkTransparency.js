import {isNumber, isString} from "../utils/is";

export default function checkTransparency(color) {
    if (isString(color)) {
        return color.substring(0, 7);
    } else {//object
        if (!isNumber(color.a)) {
            delete color.a;
        }
        return color;
    }
}
