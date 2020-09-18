export default function roundValues(obj) {
  const retObj = {};
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    const key = Object.keys(obj)[i];
    retObj[key] = Math.round(obj[key]);
  }
  return retObj;
}
