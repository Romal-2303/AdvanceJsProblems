## 📝 Question: Implement Deep Cloning of an Object

**Problem:**  
Write a function `deepClone(obj)` that creates a **deep copy** of the given object.  
The cloned object should be completely independent of the original (changing one should not affect the other).

**Requirements:**

- Handle nested objects and arrays.
- Preserve all primitive values (string, number, boolean, null, undefined).
- Avoid issues with **shared references** and **circular references**.

**Example:**

```javascript
const obj = {
  name: "John",
  details: {
    age: 30,
    hobbies: ["reading", "gaming"],
  },
};

const clone = deepClone(obj);
clone.details.age = 40;

console.log(obj.details.age); // 30  (original is not affected)
console.log(clone.details.age); // 40
```
