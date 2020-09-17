import {isNumber, isObject, isString} from "./is";

export default function checkTransparency(color) {
    if (isString(color)) {
        return color.substring(0, 7);
    } else {//object
        if(!isObject(color)){
            return null;
        }
        if (!isNumber(color.a)) {
            delete color.a;
        }
        return color;
    }
}
