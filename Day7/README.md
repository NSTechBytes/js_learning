# **JavaScript Practice - Day 7 🏆**  

Welcome to **Day 7** of JavaScript learning! Today, you’ll explore **functional programming concepts**, **closures**, **performance optimization techniques**, and **regular expressions**.  

---

## **📌 Topics Covered Today**  
✅ Functional Programming (Pure Functions, First-Class Functions, Higher-Order Functions)  
✅ Closures (Functions inside functions)  
✅ Debouncing & Throttling (Optimizing event handlers)  
✅ Regular Expressions (`RegExp`)  

---

## **📝 Exercises**  

### **1️⃣ Pure Function (No Side Effects, Same Input = Same Output)**  
Write a function that returns the square of a number without modifying external variables.  

```javascript
function square(num) {
    return num * num;
}

console.log(square(4)); // Output: 16
console.log(square(10)); // Output: 100
```

---

### **2️⃣ First-Class & Higher-Order Functions**  
Write a function that takes another function as an argument and calls it.  

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    let name = "Alex";
    console.log(callback(name));
}

processUserInput(greet);
```

---

### **3️⃣ Closures (Function Inside a Function)**  
Write a function that remembers a value even after execution.  

```javascript
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```

---

### **4️⃣ Debouncing (Optimize Search Input Event Handling)**  
Ensure a function runs only **after a user stops typing for 500ms**.  

```javascript
function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

function searchFunction() {
    console.log("Searching...");
}

const debouncedSearch = debounce(searchFunction, 500);

document.getElementById("searchInput").addEventListener("input", debouncedSearch);
```

**💡 Note:** Use this with an `<input id="searchInput">` field in an HTML file.  

---

### **5️⃣ Regular Expressions (Validate an Email)**  
Write a function that checks if an email is valid using **RegExp**.  

```javascript
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(validateEmail("test@example.com")); // Output: true
console.log(validateEmail("invalid-email")); // Output: false
```

---

## **🔥 Next Steps**  
📌 Modify the **debounce function** to allow immediate execution and then delay further calls.  
📌 Write a **throttle function** that limits how often a function can execute.  
📌 Use **regular expressions** to validate **phone numbers and passwords**.  

---

## **📚 Useful Resources**  
- [Functional Programming in JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming)  
- [Closures in JavaScript (JavaScript.info)](https://javascript.info/closure)  
- [Debounce & Throttle (CSS-Tricks)](https://css-tricks.com/debouncing-throttling-explained-examples/)  
- [Regular Expressions (RegEx) Guide](https://regex101.com/)  