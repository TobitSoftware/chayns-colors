export type RGB255 = {
    r: number;
    g: number;
    b: number;
};

export type RGB1 = RGB255;

export type RGBA255 = RGB255 & {
    a: number;
};

export type RGBA1 = RGBA255;
