# **JavaScript Practice - Day 2 🔥**

Welcome to **Day 2** of learning JavaScript! Today, we’ll explore loops, arrays, and user input to build a stronger foundation.

---

## **📌 Topics Covered Today**

✅ `for` and `while` loops

✅ Arrays and basic operations

✅ Taking user input (browser prompt)

✅ Writing and calling functions

---

## **📝 Exercises**

### **1️⃣ Looping from 1 to 10**

Write a loop that prints numbers from  **1 to 10** .

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

### **2️⃣ Sum of Numbers (Loop)**

Write a program that calculates the sum of numbers from **1 to 5** using a loop.

```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("The sum is: " + sum);
```

---

### **3️⃣ Working with Arrays**

Create an array of your favorite colors and print each color using a loop.

```javascript
let colors = ["Red", "Blue", "Green", "Yellow"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

---

### **4️⃣ Taking User Input (Browser Prompt)**

Ask the user for their name and greet them.

```javascript
let userName = prompt("What is your name?");
console.log("Hello, " + userName + "!");
```

**💡 Note:** This works in the  **browser console** , not Node.js.

---

### **5️⃣ Create a Function that Doubles a Number**

Write a function that takes a number and returns double its value.

```javascript
function doubleNumber(num) {
    return num * 2;
}
console.log(doubleNumber(4)); // Output: 8
```

---

## **🔥 Next Steps**

📌 Try modifying the loops to count  **backward** .

📌 Create an array of **fruits** and print only the ones starting with "A".

📌 Write a function that checks if a number is  **positive, negative, or zero** .

---

## **📚 Useful Resources**

* [Loops in JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [JavaScript Arrays (W3Schools)](https://www.w3schools.com/js/js_arrays.asp)
* [JavaScript Functions (FreeCodeCamp)](https://www.freecodecamp.org/news/javascript-functions-guide/)


