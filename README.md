# @chayns/colors
JavaScript utility functions for the calculation of colors for chayns

## Usage

### Installation
This package can be installed from npm using ``npm install @chayns/colors``.

### Color Model Value Ranges

#### [RGB (Red - Green - Blue)](https://en.wikipedia.org/wiki/RGB_color_model)
HEX
- Three (four with transparency) components of each two hexadecimal characters, starting with a ``#``.
- Example: #00ff3d (chayns blue)

RGB255
- r, g, b: 0 - 255
- a (transparency, optional): 0 - 1

RGB1
- r, g, b: 0 - 1
- a (transparency, optional): 0 - 1

#### [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV)
HSL (Hue - Saturation - Lightness)
- h: 0 - 360
- s, l: 0 - 1
- a (transparency, optional): 0 - 1

HSV (Hue - Saturation - Value)
- h: 0 - 360
- s, v: 0 - 1
- a (transparency, optional): 0 - 1

### Available Functions
This package provides general functions to convert colors from one color model into another as well as chayns-specific functions for generating chayns colors.
All functions allow the usage of colors with a transparency. You just have to add ``a`` to your color (fourth hexadecimal pair for HEX color).

Color model conversion functions:
- rgb1ToRgb255(rgb1)
- rgb1ToHex(rgb1)
- rgb1ToHsl(rgb1)
- rgb1ToHsv(rgb1)


- rgb255ToRgb1(rgb255)
- rgb255ToHex(rgb255)
- rgb255ToHsl(rgb255)
- rgb255ToHsv(rgb255)


- hexToRgb1(hex)
- hexToRgb255(hex)
- hexToHsl(hex)
- hexToHsv(hex)


- hslToRgb1(hsl)
- hslToRgb255(hsl)
- hslToHex(hsl)
- hslToHsv(hsl)


- hsvToRgb1(hsv)
- hsvToRgb255(hsv)
- hsvToHex(hsv)
- hsvToHsl(hsv)

Functions for normalizing and generating color strings:
- normalizeHexString(hex)
- normalizeRgbString(rgbString)
- getRgb255String(rgb255)

Mixing functions:
- mixHsv(color1, color2, weight)
- mixHsl(color1, color2, weight)
- mixRgb(color1, color2, weight)
- mixHex(color1, color2, weight)

Lightening/darkening functions:
- lightenHslColor(color, percent)
- lightenHexColor(color, percent)
- lightenHsvColor(color, percent)
- lightenRgb255Color(color, percent)
- darkenHexColor(color, percent)
- darkenHslColor(color, percent)
- darkenHsvColor(color, percent)
- darkenRgb255Color(color, percent)

Type check functions:
- isString(value)
- isNumber(value)
- isNullOrUndefined(value)
- isObject(value)
- isInInterval(value)
- isHex(value)
- isRgbString(value)
- isRgb255(value)
- isRgb1(value)
- isHsl(value)
- isHsv(value)

Chayns-specific functions
- getColorFromPalette(colorId, options)
    - options is an object of color, colorMode and secondaryColor
- getAvailableColorList()

## Releases
[Releasenotes](https://github.com/TobitSoftware/chayns-colors/releases) will be send and published via GitHub. To subscribe them, you just have to watch this repository.

## Development
1. Clone git repository
2. Install npm packages
3. Link with ``npm start``
4. Run tests with ``npm test``

### Troubleshooting
If you get the error ``SyntaxError: Unexpected token {``, you have to update your node version to at least Node 10.
