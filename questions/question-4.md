# Question 4 — Flat deeply nested object with any special keyword

**Goal**  
Write a function that flattens a deeply nested object into a single-level object using dot notation for keys.  
If any property name equals the given **special keyword**, stop flattening that property and keep its value as is.

**Example:**

Input:

```js
const obj = {
  a: 1,
  b: {
    c: 2,
    stop: {
      d: 3,
      e: 4,
    },
  },
};
const specialKey = "stop";
```
