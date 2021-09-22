export default function roundValues(obj: Record<string, number>): Record<string, number> {
  const retObj: Record<string, number> = {};
  const keys = Object.keys(obj);

  for (let i = 0, z = keys.length; i < z; i += 1) {
    const key = keys[i] as string;
    retObj[key] = Math.round(obj[key] as number);
  }

  return retObj;
}
