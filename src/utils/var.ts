import { colorPalette } from '../generator/constants';

type NumericKey<S extends string | number> = S extends `${infer N extends number}` ? `${N}` extends S ? N : never : never;
type ColorKeys = keyof typeof colorPalette[0]
type ColorNumericKeys = NumericKey<ColorKeys>;
type LiteralKey<S extends string | number> = S extends number ? `${S}` : S;
type ColorLiteralKeys = LiteralKey<ColorKeys>;

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type ColorKeyInput = ColorKeys | ColorNumericKeys | ColorLiteralKeys;

export const getChaynsColor = (name: ColorKeyInput) => `--color-${name}`;
export const getChaynsColorVar = (name: ColorKeyInput) => `var(${getChaynsColor(name)})`;
