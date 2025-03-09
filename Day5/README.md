# **JavaScript Practice - Day 5 🌐**  

Welcome to **Day 5** of JavaScript learning! Today, we’ll explore **local storage**, **fetching data from an API**, **timing functions**, and **modern ES6+ features**.  

---

## **📌 Topics Covered Today**  
✅ Local Storage (`localStorage.setItem`, `localStorage.getItem`)  
✅ Fetching Data from an API (`fetch`)  
✅ `setTimeout` and `setInterval`  
✅ ES6 Features (Template Literals, Arrow Functions, Destructuring)  

---

## **📝 Exercises**  

### **1️⃣ Store and Retrieve Data (Local Storage)**  
Save a user’s name in local storage and display it when they visit again.  

```javascript
// Store the name
localStorage.setItem("username", "Alex");

// Retrieve and display the name
let name = localStorage.getItem("username");
console.log("Welcome back, " + name + "!");
```

---

### **2️⃣ Fetch Data from an API (JSON Placeholder)**  
Fetch and display data from an external API.  

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error fetching data:", error));
```

**💡 Note:** Try replacing `posts/1` with `users/1` to get user data instead.  

---

### **3️⃣ Use `setTimeout` to Delay a Message**  
Display a message **after 3 seconds** using `setTimeout`.  

```javascript
setTimeout(() => {
    console.log("Hello after 3 seconds!");
}, 3000);
```

---

### **4️⃣ Use `setInterval` to Update Time Every Second**  
Print the current time every second.  

```javascript
setInterval(() => {
    let now = new Date();
    console.log("Current time: " + now.toLocaleTimeString());
}, 1000);
```

---

### **5️⃣ Use ES6 Features (Template Literals, Destructuring, Arrow Functions)**  
Refactor the following code using **modern ES6 features**.  

**Before (Old JavaScript)**  
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alex"));
```

**After (Using ES6)**  
```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alex"));
```

---

## **🔥 Next Steps**  
📌 Modify the API fetching example to display the data **on a webpage** instead of the console.  
📌 Create a **countdown timer** using `setInterval`.  
📌 Store **more complex objects** in local storage using `JSON.stringify()`.  

---

## **📚 Useful Resources**  
- [Local Storage (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)  
- [Fetch API (W3Schools)](https://www.w3schools.com/js/js_api_fetch.asp)  
- [JavaScript Timers (setTimeout & setInterval)](https://www.javascripttutorial.net/javascript-timer/)  
- [ES6+ Features (FreeCodeCamp)](https://www.freecodecamp.org/news/es6-javascript-features-you-should-know/)  
