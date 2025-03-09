# **JavaScript Practice - Day 8 🧠**  

Welcome to **Day 8** of JavaScript learning! Today, you’ll explore **advanced data structures**, **generators**, **how the event loop works**, and **the Web Storage API**.  

---

## **📌 Topics Covered Today**  
✅ **Sets & Maps** (Efficient data structures)  
✅ **WeakSet & WeakMap** (Garbage-collectable collections)  
✅ **Generators (`function*`)** (Pause & resume execution)  
✅ **Understanding the Event Loop**  
✅ **Session Storage vs Local Storage**  

---

## **📝 Exercises**  

### **1️⃣ Using Sets (Unique Values Only)**  
Create a `Set` to store unique numbers and try adding duplicates.  

```javascript
let numbers = new Set([1, 2, 3, 4, 5]);

numbers.add(3); // Won't be added because Sets store only unique values
numbers.add(6);

console.log(numbers); // Output: Set {1, 2, 3, 4, 5, 6}
console.log(numbers.has(4)); // Output: true
console.log(numbers.size); // Output: 6
```

---

### **2️⃣ Using Maps (Key-Value Pairs with Any Type as Key)**  
Create a `Map` to store user information.  

```javascript
let userMap = new Map();
userMap.set("name", "Alice");
userMap.set("age", 28);
userMap.set(123, "User ID");

console.log(userMap.get("name")); // Output: Alice
console.log(userMap.has("age")); // Output: true
console.log(userMap.size); // Output: 3
```

---

### **3️⃣ WeakMap & WeakSet (Garbage-Collectable Data Structures)**  
Use a `WeakMap` to store private data for an object.  

```javascript
let privateData = new WeakMap();

function User(name) {
    let userInfo = { secret: "This is private!" };
    privateData.set(this, userInfo);
    this.name = name;
}

let user1 = new User("Bob");
console.log(privateData.get(user1)); // Output: { secret: "This is private!" }
```

---

### **4️⃣ Using Generators (`function*`)**  
Create a generator function that generates an infinite sequence of numbers.  

```javascript
function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num++;
    }
}

let generator = numberGenerator();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
```

---

### **5️⃣ Understanding the Event Loop (Async Task Execution)**  
Run the following code and predict the output.  

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");
```

**💡 Expected Output:**  
```
Start  
End  
Inside Promise  
Inside setTimeout  
```
✅ **Explanation:**  
- **"Start" & "End"** run first because they are synchronous.  
- **Promise resolves before `setTimeout(0)`** due to the microtask queue in the event loop.  

---

### **6️⃣ Local Storage vs. Session Storage (Web Storage API)**  
Store user preferences using **localStorage** and **sessionStorage**.  

```javascript
// Store data
localStorage.setItem("theme", "dark");
sessionStorage.setItem("sessionData", "Temporary");

// Retrieve data
console.log(localStorage.getItem("theme")); // Output: dark
console.log(sessionStorage.getItem("sessionData")); // Output: Temporary

// Remove data
localStorage.removeItem("theme");
sessionStorage.clear();
```

**💡 Difference:**  
- `localStorage` persists **even after closing the browser**.  
- `sessionStorage` is **cleared when the session ends** (browser is closed).  

---

## **🔥 Next Steps**  
📌 Modify the **Set exercise** to store unique usernames.  
📌 Create a generator function that generates **Fibonacci numbers**.  
📌 Experiment with **the event loop** by adding multiple `setTimeout` and `Promises`.  

---

## **📚 Useful Resources**  
- [JavaScript Sets & Maps (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)  
- [Understanding WeakMap & WeakSet](https://javascript.info/weakmap-weakset)  
- [JavaScript Generators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)  
- [Event Loop Explained (Philip Roberts' Talk)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)  
- [Local Storage vs Session Storage (W3Schools)](https://www.w3schools.com/html/html5_webstorage.asp)  