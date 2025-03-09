# **JavaScript Practice - Day 13 🔥**  

Welcome to **Day 13** of JavaScript learning! Today, we’ll explore **asynchronous patterns, dynamic imports, browser APIs for performance, and advanced storage techniques** to make your JavaScript apps more efficient.  

---

## **📌 Topics Covered Today**  
✅ Advanced Asynchronous JavaScript (`Promise.all`, `Promise.race`, `async generators`)  
✅ Dynamic Imports (`import()` for on-demand module loading)  
✅ Web Animations API (Animating elements without CSS)  
✅ Intersection Observer (Detecting when an element is visible)  
✅ Browser Storage Strategies (Using cookies, localStorage, sessionStorage, and IndexedDB effectively)  

---

## **📝 Exercises**  

### **1️⃣ Promise.all & Promise.race - Handling Multiple Async Calls**  
Run multiple promises simultaneously using **`Promise.all`** and **`Promise.race`**.  

```javascript
const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 1000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), 3000));

Promise.all([p1, p2, p3]).then(results => console.log("All Promises:", results));

Promise.race([p1, p2, p3]).then(result => console.log("First Resolved:", result));
```

**💡 Explanation:**  
- `Promise.all` waits for **all promises to resolve**.  
- `Promise.race` returns the **first resolved promise**.  

---

### **2️⃣ Dynamic Imports - Load JavaScript Modules on Demand**  
Load a JavaScript module **only when needed** to improve performance.  

```javascript
document.getElementById("loadModule").addEventListener("click", async () => {
    let { greet } = await import("./utils.js"); // Load dynamically
    greet("Alice");
});
```

**In `utils.js`:**  
```javascript
export function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

**💡 Explanation:**  
- **Dynamic imports** load JavaScript **only when needed**, improving page speed.  

---

### **3️⃣ Web Animations API - Animate Elements with JavaScript**  
Use the **Web Animations API** to animate an element.  

```html
<button id="animate">Animate Box</button>
<div id="box" style="width: 100px; height: 100px; background: red;"></div>

<script>
    document.getElementById("animate").addEventListener("click", () => {
        document.getElementById("box").animate([
            { transform: "translateX(0px)" },
            { transform: "translateX(200px)" }
        ], { duration: 1000, iterations: 2 });
    });
</script>
```

**💡 Explanation:**  
- The **Web Animations API** allows **smooth animations** without using CSS.  

---

### **4️⃣ Intersection Observer - Detect When an Element is in View**  
Lazy load images **only when they appear on screen**.  

```javascript
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target); // Stop observing after loading
        }
    });
});

document.querySelectorAll("img[data-src]").forEach(img => observer.observe(img));
```

**In HTML:**  
```html
<img data-src="image.jpg" alt="Lazy Loaded Image">
```

**💡 Explanation:**  
- **Intersection Observer** improves performance by **loading images only when visible**.  

---

### **5️⃣ Browser Storage Strategies - Efficient Data Persistence**  

**Storing a User Preference in Cookies:**  
```javascript
document.cookie = "theme=dark; path=/; max-age=3600"; 
console.log(document.cookie); // Output: theme=dark
```

**Storing Data in localStorage:**  
```javascript
localStorage.setItem("username", "Alice");
console.log(localStorage.getItem("username")); // Output: Alice
```

**Using IndexedDB for Structured Data:**  
```javascript
let request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function (event) {
    let db = event.target.result;
    db.createObjectStore("users", { keyPath: "id" });
};
```

**💡 Explanation:**  
- **Cookies** store small data, sent with each request.  
- **localStorage/sessionStorage** store data but not structured objects.  
- **IndexedDB** stores structured data **efficiently** for large applications.  

---

## **🔥 Next Steps**  
📌 Modify **Promise.all example** to simulate an API call with a failure.  
📌 Improve **Web Animations** to control animation playback dynamically.  
📌 Extend **Intersection Observer** to trigger animations when an element enters the viewport.  

---

## **📚 Useful Resources**  
- [Promise.all & Promise.race (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)  
- [Dynamic Imports (JavaScript.info)](https://javascript.info/modules-dynamic-imports)  
- [Web Animations API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)  
- [Intersection Observer API (Google Developers)](https://developers.google.com/web/updates/2016/04/intersectionobserver)  
- [Web Storage & IndexedDB Guide](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
