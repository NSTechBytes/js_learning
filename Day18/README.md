# **JavaScript Practice - Day 18 🤖⚡📂**  

Welcome to **Day 18** of JavaScript learning! Today, we’ll explore **machine learning in JavaScript, graphics rendering with WebGPU, background sync, real-time streaming, and file system operations in Node.js**.  

---

## **📌 Topics Covered Today**  
✅ **AI & Machine Learning in JavaScript** (TensorFlow.js)  
✅ **WebGPU API** (High-performance graphics rendering)  
✅ **Background Sync API** (Sync data when the user is offline)  
✅ **Streams API** (Efficient real-time data handling)  
✅ **Node.js File System (`fs` module)** (Reading & writing files)  

---

## **📝 Exercises**  

### **1️⃣ AI & Machine Learning in JavaScript - Classify Images with TensorFlow.js**  
Use **TensorFlow.js** to load a pre-trained AI model and classify images.  

**Step 1: Install TensorFlow.js**  
```sh
npm install @tensorflow/tfjs @tensorflow-models/mobilenet
```

**Step 2: Load and Use the Model in `main.js`**  
```javascript
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

async function classifyImage(imgElement) {
    let model = await mobilenet.load();
    let predictions = await model.classify(imgElement);
    console.log(predictions);
}

// Call the function with an image element
classifyImage(document.getElementById("image"));
```

**💡 Explanation:**  
- **TensorFlow.js** allows running **AI models in the browser**.  
- The **MobileNet model** classifies images into **real-world categories**.  

---

### **2️⃣ WebGPU API - High-Performance Graphics Rendering**  
Use **WebGPU API** to render high-performance graphics.  

```javascript
async function initWebGPU() {
    if (!navigator.gpu) {
        console.log("WebGPU not supported");
        return;
    }

    let adapter = await navigator.gpu.requestAdapter();
    let device = await adapter.requestDevice();
    console.log("WebGPU initialized:", device);
}

initWebGPU();
```

**💡 Explanation:**  
- **WebGPU API** allows running **high-performance 3D graphics** on modern GPUs.  

---

### **3️⃣ Background Sync API - Sync Data When Offline**  
Ensure that **data is sent to the server** even when offline.  

**Step 1: Register Sync Event in `service-worker.js`**  
```javascript
self.addEventListener("sync", event => {
    if (event.tag === "sync-data") {
        event.waitUntil(syncDataWithServer());
    }
});

async function syncDataWithServer() {
    let data = await fetch("/offline-data");
    console.log("Data synced:", await data.json());
}
```

**Step 2: Request Sync from `main.js`**  
```javascript
navigator.serviceWorker.ready.then(reg => {
    return reg.sync.register("sync-data");
});
```

**💡 Explanation:**  
- The **Background Sync API** ensures **data is sent to the server when the user is back online**.  

---

### **4️⃣ Streams API - Read Large Files in Chunks**  
Use **Streams API** to efficiently **read large files in small parts**.  

```javascript
fetch("large-file.txt")
    .then(response => response.body)
    .then(stream => {
        const reader = stream.getReader();
        return reader.read().then(function processText({ done, value }) {
            if (done) return;
            console.log("Chunk:", new TextDecoder().decode(value));
            return reader.read().then(processText);
        });
    });
```

**💡 Explanation:**  
- **Streams API** allows reading **large files chunk by chunk**, preventing memory overload.  

---

### **5️⃣ Node.js File System - Read & Write Files (`fs` module)**  
Use **Node.js `fs` module** to read and write files.  

```javascript
const fs = require("fs");

// Writing to a file
fs.writeFile("test.txt", "Hello, Node.js!", err => {
    if (err) throw err;
    console.log("File written!");

    // Reading the file
    fs.readFile("test.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);
    });
});
```

**💡 Explanation:**  
- **`fs.writeFile`** writes data to a file.  
- **`fs.readFile`** reads the file **asynchronously**.  

---

## **🔥 Next Steps**  
📌 Modify **TensorFlow.js example** to classify multiple images.  
📌 Use **WebGPU API** to draw **3D objects**.  
📌 Enhance **Background Sync API** to **cache user actions** when offline.  
📌 Experiment with **Streams API** to write **large files efficiently**.  
📌 Extend **Node.js `fs` operations** to create a **file-based database**.  

---

## **📚 Useful Resources**  
- [TensorFlow.js (AI in JavaScript)](https://www.tensorflow.org/js)  
- [WebGPU API (Google Developers)](https://developer.chrome.com/en/blog/webgpu/)  
- [Background Sync API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Background_Sync_API)  
- [Streams API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API)  
- [Node.js File System (`fs` module)](https://nodejs.org/api/fs.html)  
