## 📝 Question: Check if Two Objects Are Deeply Equal

**Problem:**  
Write a function `deepEqual(obj1, obj2)` that checks whether two values are **deeply equal**.  
Two values are deeply equal if:

- They have the same structure.
- All corresponding keys and values are equal (including nested objects and arrays).
- Order of keys does not matter for objects.
- Primitives must match exactly.

**Example:**

```javascript
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

console.log(deepEqual(obj1, obj2)); // true
```
