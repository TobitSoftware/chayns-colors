import { HEX_REGEX } from '../../utils/constants';
import { isHex, isNumber } from '../../utils/is';

export default function hexToRgb255(hex) {
  if (!isHex(hex)) {
    return null;
  }
  const components = hex.match(HEX_REGEX);
  const retObj = {
    r: parseInt(components[1].substring(0, 2), 16),
    g: parseInt(components[1].substring(2, 4), 16),
    b: parseInt(components[1].substring(4, 6), 16),
  };
  const a = parseInt(components[1].substring(6, 8), 16) / 255;
  if (isNumber(a)) {
    retObj.a = a;
  }
  return retObj;
}
