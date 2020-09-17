import {hexToRgb255, hslToRgb255, hsvToRgb255, rgb255ToHex, rgb255ToHsl, rgb255ToHsv} from "../converter";

function lightenHslColor(color, percent) {
    color.l += percent / 100;
    if (color.l > 1) {
        color.l = 1;
    }
    return color;
}

function darkenHslColor(color, percent) {
    return lightenHslColor(color, percent * -1);
}

function lightenRgb255Color(color, percent) {
    return hslToRgb255(lightenHslColor(rgb255ToHsl(color), percent));
}

function darkenRgb255Color(color, percent) {
    return hslToRgb255(darkenHslColor(rgb255ToHsl(color), percent));
}

function lightenHexColor(color, percent) {
    return rgb255ToHex(lightenRgb255Color(hexToRgb255(color), percent));
}

function darkenHexColor(color, percent) {
    return rgb255ToHex(darkenHslColor(hexToRgb255(color), percent));
}

function lightenHsvColor(color, percent) {
    return rgb255ToHsv(lightenRgb255Color(hsvToRgb255(color), percent));
}

function darkenHsvColor(color, percent) {
    return rgb255ToHsv(darkenHslColor(hsvToRgb255(color), percent));
}

export {
    lightenHslColor,
    darkenHslColor,
    lightenRgb255Color,
    darkenRgb255Color,
    lightenHexColor,
    darkenHexColor,
    lightenHsvColor,
    darkenHsvColor
};
