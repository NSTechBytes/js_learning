# **JavaScript Practice - Day 17 ⚡🎤📡**  

Welcome to **Day 17** of JavaScript learning! Today, we’ll explore **multithreading, database transactions, real-time communication, speech recognition, and building APIs with Node.js & Express**.  

---

## **📌 Topics Covered Today**  
✅ **Multithreading with Web Workers** (Running tasks in the background)  
✅ **IndexedDB Transactions** (Efficient database operations)  
✅ **WebSockets** (Two-way real-time communication)  
✅ **Speech Recognition API** (Convert speech to text)  
✅ **Node.js with Express.js** (Building a REST API)  

---

## **📝 Exercises**  

### **1️⃣ Web Workers - Running JavaScript in a Separate Thread**  
Use a **Web Worker** to run a computation-intensive task **without blocking the UI**.  

**Step 1: Create `worker.js`**  
```javascript
self.onmessage = function (event) {
    let result = 0;
    for (let i = 0; i < 1e7; i++) result += i;
    postMessage(result);
};
```

**Step 2: Use the Worker in `main.js`**  
```javascript
let worker = new Worker("worker.js");

worker.onmessage = function (event) {
    console.log("Result from worker:", event.data);
};

worker.postMessage("start");
```

**💡 Explanation:**  
- **Web Workers** allow running tasks **in the background**, improving UI responsiveness.  

---

### **2️⃣ IndexedDB Transactions - Store & Retrieve Data Efficiently**  
Perform **read/write transactions** in IndexedDB.  

```javascript
let request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function (event) {
    let db = event.target.result;
    let store = db.createObjectStore("users", { keyPath: "id" });
    store.transaction.oncomplete = function () {
        console.log("Store created!");
    };
};

request.onsuccess = function () {
    let db = request.result;
    let transaction = db.transaction("users", "readwrite");
    let store = transaction.objectStore("users");
    store.add({ id: 1, name: "Alice" });

    transaction.oncomplete = () => console.log("User added!");
};
```

**💡 Explanation:**  
- **Transactions ensure atomicity**, so operations either fully succeed or fail.  

---

### **3️⃣ WebSockets - Bi-Directional Real-Time Communication**  
Enable **two-way communication** between client and server using WebSockets.  

**Step 1: Create a WebSocket Server in `server.js`**  
```javascript
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", socket => {
    console.log("Client connected");

    socket.on("message", message => {
        console.log("Received:", message);
        socket.send(`Echo: ${message}`);
    });

    socket.on("close", () => console.log("Client disconnected"));
});
```

**Step 2: Connect to WebSocket Server in `client.js`**  
```javascript
let socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => socket.send("Hello, Server!");
socket.onmessage = event => console.log("Server says:", event.data);
```

**💡 Explanation:**  
- **WebSockets** allow real-time, **two-way** communication between a client and a server.  

---

### **4️⃣ Speech Recognition API - Convert Speech to Text**  
Use the **Speech Recognition API** to convert **spoken words into text**.  

```javascript
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = event => {
    console.log("Recognized text:", event.results[0][0].transcript);
};
recognition.start();
```

**💡 Explanation:**  
- **Speech Recognition API** converts **spoken input into text** in real time.  

---

### **5️⃣ Node.js with Express.js - Build a Simple REST API**  
Create a **basic REST API** with **Express.js** to handle HTTP requests.  

**Step 1: Install Express.js and Create `server.js`**  
```sh
npm init -y
npm install express
```

**Step 2: Write the Express.js Server Code**  
```javascript
const express = require("express");
const app = express();

app.use(express.json());

let users = [{ id: 1, name: "Alice" }];

app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
    users.push(req.body);
    res.json({ message: "User added!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

**Step 3: Test API with `fetch()` from the Frontend**  
```javascript
fetch("/users")
    .then(res => res.json())
    .then(data => console.log("Users:", data));

fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 2, name: "Bob" })
}).then(res => res.json()).then(data => console.log(data));
```

**💡 Explanation:**  
- **Express.js** simplifies creating REST APIs.  
- The API **supports GET and POST requests** to manage user data.  

---

## **🔥 Next Steps**  
📌 Modify **Web Workers** to process **large datasets** efficiently.  
📌 Extend **WebSockets** for a **real-time chat app**.  
📌 Use **Speech Recognition API** to control **UI elements with voice commands**.  
📌 Improve **Express.js API** by adding **DELETE and UPDATE routes**.  

---

## **📚 Useful Resources**  
- [Web Workers (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)  
- [IndexedDB Transactions (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
- [WebSockets Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)  
- [Speech Recognition API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)  
- [Express.js Documentation](https://expressjs.com/)  
