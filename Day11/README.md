# **JavaScript Practice - Day 11 🧠**  

Welcome to **Day 11** of JavaScript learning! Today, you’ll explore **Proxies & Reflect API, Web Workers, Memoization for performance optimization, and Bitwise operations**.  

---

## **📌 Topics Covered Today**  
✅ **Proxy & Reflect API** (Intercepting object operations)  
✅ **Web Workers** (Run JavaScript in the background)  
✅ **Memoization** (Optimize function calls)  
✅ **Bitwise Operations** (Manipulating binary data)  

---

## **📝 Exercises**  

### **1️⃣ Proxy & Reflect API - Intercept Object Operations**  
Use **Proxy** to validate object properties when they are set.  

```javascript
let user = {
    name: "Alice",
    age: 25
};

let handler = {
    set(target, property, value) {
        if (property === "age" && value < 0) {
            console.log("Age cannot be negative!");
            return false;
        }
        target[property] = value;
        return true;
    }
};

let proxyUser = new Proxy(user, handler);
proxyUser.age = 30; // Works fine
proxyUser.age = -5; // Output: Age cannot be negative!
```

**💡 Explanation:**  
- The **Proxy** object intercepts operations on `user`.  
- If an invalid age is set, the proxy prevents it.  

---

### **2️⃣ Web Workers - Running JavaScript in the Background**  
Create a **Web Worker** to run a task without blocking the main thread.  

**Step 1: Create `worker.js` (Worker Code)**  
```javascript
self.onmessage = function (event) {
    let num = event.data;
    let result = num * num;
    postMessage(result);
};
```

**Step 2: Main JavaScript File**  
```javascript
let worker = new Worker("worker.js");

worker.postMessage(5); // Sending data to worker

worker.onmessage = function (event) {
    console.log("Squared result:", event.data);
};
```

**💡 Explanation:**  
- Web Workers allow **running JavaScript in the background**, preventing UI lag.  
- The **worker script** listens for messages and returns results asynchronously.  

---

### **3️⃣ Memoization - Caching Function Results for Performance**  
Optimize function calls by **caching previously computed values**.  

```javascript
function memoizedFactorial() {
    let cache = {};

    return function factorial(n) {
        if (n in cache) {
            console.log("Fetching from cache:", n);
            return cache[n];
        }
        console.log("Calculating:", n);
        if (n === 0) return 1;
        cache[n] = n * factorial(n - 1);
        return cache[n];
    };
}

let factorial = memoizedFactorial();
console.log(factorial(5)); // Calculates
console.log(factorial(5)); // Fetches from cache
```

**💡 Explanation:**  
- Memoization **stores results** of function calls to **avoid redundant calculations**.  

---

### **4️⃣ Bitwise Operations - Checking if a Number is Odd or Even**  
Use the **bitwise AND (`&`)** operator to determine if a number is odd or even.  

```javascript
function isEven(num) {
    return (num & 1) === 0;
}

console.log(isEven(4)); // Output: true (Even)
console.log(isEven(7)); // Output: false (Odd)
```

**💡 Explanation:**  
- The **last bit** in binary determines whether a number is odd or even.  
- **Even numbers** always have the last bit as `0`, odd numbers as `1`.  

---

### **5️⃣ Bitwise Operations - Swapping Two Numbers Without a Temp Variable**  
Use the **bitwise XOR (`^`)** operator to swap values **without using a third variable**.  

```javascript
let a = 5, b = 10;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log("a:", a, "b:", b); // Output: a: 10, b: 5
```

**💡 Explanation:**  
- XOR `^` works as a **toggle switch** that swaps values without a temp variable.  

---

## **🔥 Next Steps**  
📌 Extend the **Proxy example** to validate other data types.  
📌 Modify the **Web Worker** to perform a **long computation** like Fibonacci.  
📌 Experiment with **memoization** for a recursive Fibonacci function.  
📌 Explore **bitwise tricks**, such as multiplying/dividing by powers of 2 using shifts (`<<`, `>>`).  

---

## **📚 Useful Resources**  
- [JavaScript Proxy & Reflect API (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)  
- [Web Workers Guide (Google Developers)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)  
- [Memoization & Dynamic Programming (FreeCodeCamp)](https://www.freecodecamp.org/news/memoization-in-javascript/)  
- [Bitwise Operators Explained (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)  
