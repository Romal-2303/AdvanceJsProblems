function deepClone(value, map = new WeakMap()) {
  // If value is null or not an object, return as is (primitives)
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle circular references
  if (map.has(value)) {
    return map.get(value);
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const arrCopy = [];

    map.set(value, arrCopy);
    for (let i = 0; i < value.length; i++) {
      arrCopy[i] = deepClone(value[i], map);
    }

    return arrCopy;
  }

  // Handle plain objects
  const objCopy = {};
  map.set(value, objCopy);
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      objCopy[key] = deepClone(value[key], map);
    }
  }

  return objCopy;
}

const obj = {
  name: "John",
  details: {
    age: 30,
    hobbies: ["reading", "gaming"],
  },
};

const clonedObj = deepClone(obj);

clonedObj.details.age = 40;

console.log("original Obj", obj);
console.log("Cloned Obj", clonedObj);

// Why WeakMap instead of Map?

// WeakMap keys are objects only (which is perfect because we only need to track objects).

// WeakMap does not prevent garbage collection of its keys, so it's memory-safe for temporary structures like this.
