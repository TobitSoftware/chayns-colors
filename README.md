# @chayns/colors
JavaScript helper functions for the calculation of colors for chayns

## Development

1. Clone git repository
2. Install npm packages
3. Run tests with ``npm test``

### Troubleshooting
If you get the error ``SyntaxError: Unexpected token {``, you have to update your node version.

## Color Model Value Ranges

### HEX (Hexadecimal)
- Three (four with transparency) components of two hexadecimal characters, starting with a ``#``.
- Example: #00ff3d (chayns blue)

### RGB255 (Red - Green - Blue)
- r, g, b: 0 - 255
- a (transparency, optional): 0 - 1

### RGB1 (Red - Green - Blue)
- r, g, b: 0 - 1
- a (transparency, optional): 0 - 1

### HSL (Hue - Saturation - Lightness)
- h: 0 - 360
- s, l: 0 - 1
- a (transparency, optional): 0 - 1

### HSV (Hue - Saturation - Value)
- h: 0 - 360
- s, v: 0 - 1
- a (transparency, optional): 0 - 1
