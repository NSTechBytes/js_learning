# **JavaScript Practice - Day 16 🌐🚀**  

Welcome to **Day 16** of JavaScript learning! Today, we’ll explore **Progressive Web Apps (PWA), real-time updates with SSE, Bluetooth connectivity, WebAssembly for high-performance code, and an introduction to Node.js**.  

---

## **📌 Topics Covered Today**  
✅ **Progressive Web Apps (PWA)** (Offline-first, Service Workers)  
✅ **Server-Sent Events (SSE)** (Real-time server-to-client communication)  
✅ **Web Bluetooth API** (Connecting to Bluetooth devices)  
✅ **WebAssembly (WASM)** (Running high-performance code in the browser)  
✅ **Node.js Basics** (Setting up a server & working with files)  

---

## **📝 Exercises**  

### **1️⃣ Progressive Web Apps (PWA) - Installable Web Apps**  
Make a **simple website installable** like an app using a Service Worker.  

**Step 1: Create a `manifest.json` file**  
```json
{
    "name": "My PWA App",
    "short_name": "PWA",
    "start_url": "/index.html",
    "display": "standalone",
    "icons": [
        { "src": "icon.png", "sizes": "192x192", "type": "image/png" }
    ]
}
```

**Step 2: Register the Service Worker in `main.js`**  
```javascript
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then(() => {
        console.log("Service Worker Registered!");
    });
}
```

**Step 3: Create `service-worker.js`**  
```javascript
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pwa-cache").then(cache => {
            return cache.addAll(["/", "/index.html"]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
```

**💡 Explanation:**  
- **PWA apps** can be **installed** on mobile/desktop.  
- The **Service Worker** caches files for **offline usage**.  

---

### **2️⃣ Server-Sent Events (SSE) - Real-Time Updates from the Server**  
Use **SSE** to receive **live data updates from the server**.  

**Step 1: Create an SSE Server in `server.js`**  
```javascript
const express = require("express");
const app = express();

app.get("/events", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    setInterval(() => res.write(`data: ${new Date().toLocaleTimeString()}\n\n`), 1000);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

**Step 2: Connect to SSE from the Frontend**  
```javascript
const eventSource = new EventSource("/events");
eventSource.onmessage = event => console.log("New message:", event.data);
```

**💡 Explanation:**  
- **SSE (Server-Sent Events)** allows **one-way real-time updates** from the server to the client.  

---

### **3️⃣ Web Bluetooth API - Connect to Bluetooth Devices**  
Scan for **Bluetooth devices** and connect to them using JavaScript.  

```javascript
async function connectBluetooth() {
    try {
        let device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        console.log("Connected to:", device.name);
    } catch (error) {
        console.log("Bluetooth connection failed:", error);
    }
}

connectBluetooth();
```

**💡 Explanation:**  
- **Web Bluetooth API** allows **web apps to interact with Bluetooth devices**.  

---

### **4️⃣ WebAssembly (WASM) - Run C/C++ Code in JavaScript**  
Compile **WebAssembly** and call it from JavaScript.  

**Step 1: Write a simple C program (`hello.c`)**  
```c
#include <stdio.h>
int main() {
    printf("Hello from WebAssembly!\n");
    return 0;
}
```

**Step 2: Compile to WASM (using Emscripten)**  
```sh
emcc hello.c -o hello.wasm
```

**Step 3: Load WebAssembly in JavaScript**  
```javascript
fetch("hello.wasm")
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes))
    .then(result => console.log("WASM Loaded!"));
```

**💡 Explanation:**  
- **WebAssembly (WASM)** allows **running high-performance C/C++ code** inside JavaScript.  

---

### **5️⃣ Node.js Basics - Create a Simple Server & Read a File**  
Set up a **basic Node.js server** and read a file.  

**Step 1: Install Node.js and Create `server.js`**  
```javascript
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}).listen(3000, () => console.log("Server running on port 3000"));
```

**Step 2: Run the Server**  
```sh
node server.js
```

**💡 Explanation:**  
- **Node.js** is a **JavaScript runtime** for building backend applications.  

---

## **🔥 Next Steps**  
📌 Extend the **PWA** by adding a custom **install prompt**.  
📌 Modify **SSE** to send real-time **stock prices**.  
📌 Experiment with **Bluetooth API** to control a **smart device**.  
📌 Extend **Node.js server** to create a **REST API**.  

---

## **📚 Useful Resources**  
- [PWA & Service Workers (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)  
- [Server-Sent Events (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)  
- [Web Bluetooth API (Google Developers)](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web)  
- [WebAssembly Guide (MDN)](https://developer.mozilla.org/en-US/docs/WebAssembly)  
- [Node.js Documentation](https://nodejs.org/en/docs/)  
