function deepEqual(a, b) {
  // If both are the same reference or both are NaN
  if (a === b) return true;

  // If either is null or not an object (covers primitives)
  if (
    a === null ||
    b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }

  // Get keys of both objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // If number of keys is different, objects are not equal
  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = {
  name: "Alice",
  details: {
    age: 25,
    hobbies: ["reading", "chess"],
  },
};

const obj2 = {
  name: "Alice",
  details: {
    age: 25,
    hobbies: ["reading", "chess"],
  },
};

console.log(deepEqual(obj1, obj2));
