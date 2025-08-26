function flattenObject(obj, specialKey, parentKey = "", result = {}) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (key === specialKey && typeof obj[key] === "object") {
      // Keep the entire object as is for this key
      result[newKey] = obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      // Recursively flatten
      flattenObject(obj[key], specialKey, newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

// Example usage:
const obj = {
  a: 1,
  b: {
    c: { c1: [1, 2, 3], stop: 1 },
    stop: {
      d: 3,
      e: 4,
    },
  },
};
console.log(flattenObject(obj, "stop"));
