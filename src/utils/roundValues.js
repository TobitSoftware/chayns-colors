export default function roundValues(obj) {
    const retObj = {};
    for (let key of Object.keys(obj)) {
        retObj[key] = Math.round(obj[key]);
    }
    return retObj;
}
