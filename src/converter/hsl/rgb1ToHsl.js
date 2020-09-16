import checkTransparency from "../checkTransparency";

export default function rgb1ToHsl({r, g, b, a}) {
    const rr = r, gg = g, bb = b;
    const max = Math.max(rr, gg, bb);
    const min = Math.min(rr, gg, bb);
    let h;
    if (max === min) {
        h = 0;
    } else if (max === rr) {
        h = 60 * (((gg - bb) / (max - min)));
    } else if (max === gg) {
        h = 60 * (2 + ((bb - rr) / (max - min)));
    } else if (max === bb) {
        h = 60 * (4 + ((rr - gg) / (max - min)));
    }
    if (h < 0) {
        h += 360;
    }
    let s;
    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = ((max - min) / (1 - Math.abs(max + min - 1)));
    }
    let l = ((max + min) / 2);
    return checkTransparency({h, s, l, a});
}
