# **JavaScript Practice - Day 10 🚀**  

Welcome to **Day 10** of JavaScript learning! Today, we’ll explore **real-time communication, progressive web app (PWA) features, database storage, performance optimization, and reusable web components**.  

---

## **📌 Topics Covered Today**  
✅ WebSockets (Real-time Communication)  
✅ Service Workers (Offline Caching & Background Sync)  
✅ IndexedDB (Client-Side Database)  
✅ Performance Optimization (Lazy Loading & Code Splitting)  
✅ Web Components (Custom Elements, Shadow DOM, Templates)  

---

## **📝 Exercises**  

### **1️⃣ WebSockets - Real-Time Communication**  
Connect to a WebSocket server and send/receive messages.  

```javascript
let socket = new WebSocket("wss://echo.websocket.org");

socket.onopen = function () {
    console.log("Connected to WebSocket");
    socket.send("Hello, WebSocket!");
};

socket.onmessage = function (event) {
    console.log("Received: " + event.data);
};

socket.onclose = function () {
    console.log("WebSocket connection closed");
};
```

**💡 Explanation:**  
- WebSockets allow **real-time communication** between client and server.  
- The `onmessage` event listens for incoming messages.  

---

### **2️⃣ Service Worker - Caching for Offline Mode**  
Register a service worker to cache files for offline access.  

**Step 1: Create a file `service-worker.js`**  
```javascript
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("static-v1").then((cache) => {
            return cache.addAll(["/", "/index.html", "/styles.css"]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
```

**Step 2: Register the Service Worker in `main.js`**  
```javascript
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then(() => {
        console.log("Service Worker Registered");
    });
}
```

**💡 Explanation:**  
- **Caches files** for offline access.  
- The **fetch event** serves cached files if the user is offline.  

---

### **3️⃣ IndexedDB - Storing Data Locally**  
Save and retrieve data using IndexedDB.  

```javascript
let db;

let request = indexedDB.open("MyDatabase", 1);

request.onsuccess = function () {
    db = request.result;
    console.log("Database opened successfully");
};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("users", { keyPath: "id" });
};

function addUser(user) {
    let transaction = db.transaction(["users"], "readwrite");
    let store = transaction.objectStore("users");
    store.add(user);
}

addUser({ id: 1, name: "Alice", age: 30 });
```

**💡 Explanation:**  
- IndexedDB allows **storing large amounts of data in the browser**.  
- Data persists even after closing the browser.  

---

### **4️⃣ Performance Optimization - Lazy Loading Images**  
Use `loading="lazy"` to improve page performance.  

```html
<img src="large-image.jpg" alt="Lazy Loaded Image" loading="lazy">
```

**💡 Explanation:**  
- The image loads **only when it’s about to be visible on the screen**, improving page speed.  

---

### **5️⃣ Web Components - Creating a Custom Element**  
Create a custom button component using Web Components.  

```javascript
class CustomButton extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: "open" });

        let button = document.createElement("button");
        button.textContent = "Click Me!";
        shadow.appendChild(button);
    }
}

customElements.define("custom-button", CustomButton);
```

**Usage in HTML:**  
```html
<custom-button></custom-button>
```

**💡 Explanation:**  
- Web Components allow **creating reusable HTML elements**.  
- The **Shadow DOM** keeps styles and scripts encapsulated.  

---

## **🔥 Next Steps**  
📌 Modify the **WebSocket example** to send messages from an input field.  
📌 Extend the **Service Worker** to cache API responses.  
📌 Store **user preferences** in IndexedDB and retrieve them on page load.  

---

## **📚 Useful Resources**  
- [WebSockets (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)  
- [Service Workers & Caching (Google Developers)](https://developers.google.com/web/fundamentals/primers/service-workers)  
- [IndexedDB (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
- [Web Components Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/Web_Components)  
