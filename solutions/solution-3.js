function reverseString(str) {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!/[a-zA-Z]/.test(arr[left])) {
      left++;
    } else if (!/[a-zA-Z]/.test(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

// Example usage:
console.log(reverseString("a,b$c")); // Output: "c,b$a"
console.log(reverseString("Ab,c,de!$")); // Output: "ed,c,bA!$"
