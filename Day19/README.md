# **JavaScript Practice - Day 19 ⛓️📹🔗**  

Welcome to **Day 19** of JavaScript learning! Today, we’ll explore **blockchain technology, real-time peer-to-peer communication, advanced storage with IndexedDB, virtual reality with WebXR, and efficient caching strategies**.  

---

## **📌 Topics Covered Today**  
✅ **Blockchain in JavaScript** (Building a simple blockchain)  
✅ **WebRTC Peer-to-Peer Communication** (Video calls without a server)  
✅ **IndexedDB for Large-Scale Storage** (Handling large amounts of client-side data)  
✅ **WebXR API for Virtual Reality** (Creating VR experiences in the browser)  
✅ **Advanced Caching Strategies** (Optimizing Service Workers)  

---

## **📝 Exercises**  

### **1️⃣ Blockchain in JavaScript - Create a Simple Blockchain**  
Build a **basic blockchain** using JavaScript objects.  

```javascript
const crypto = require("crypto");

class Block {
    constructor(index, timestamp, data, previousHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash("sha256").update(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash).digest("hex");
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, Date.now(), "Genesis Block", "0");
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.chain[this.chain.length - 1].hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block(1, Date.now(), { amount: 10 }));
myBlockchain.addBlock(new Block(2, Date.now(), { amount: 20 }));

console.log(JSON.stringify(myBlockchain, null, 2));
```

**💡 Explanation:**  
- A **block** contains transaction data and a unique **hash**.  
- **New blocks reference the hash of the previous block**, forming a **chain**.  

---

### **2️⃣ WebRTC - Peer-to-Peer Video Calling**  
Enable **video calls without a central server** using WebRTC.  

```javascript
let peer = new RTCPeerConnection();

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        document.getElementById("localVideo").srcObject = stream;
        stream.getTracks().forEach(track => peer.addTrack(track, stream));
    });

peer.ontrack = event => {
    document.getElementById("remoteVideo").srcObject = event.streams[0];
};
```

**💡 Explanation:**  
- **WebRTC API** enables **direct video communication between users** without a server.  

---

### **3️⃣ IndexedDB - Efficient Large-Scale Storage**  
Store **structured data** in IndexedDB efficiently.  

```javascript
let db;

let request = indexedDB.open("MyDatabase", 1);
request.onupgradeneeded = event => {
    db = event.target.result;
    db.createObjectStore("messages", { keyPath: "id" });
};

request.onsuccess = () => {
    db = request.result;
    let transaction = db.transaction("messages", "readwrite");
    let store = transaction.objectStore("messages");
    store.add({ id: 1, text: "Hello, IndexedDB!" });
};
```

**💡 Explanation:**  
- **IndexedDB stores large amounts of structured data** in the browser efficiently.  

---

### **4️⃣ WebXR API - Create a VR Experience**  
Use **WebXR API** to build a **simple virtual reality environment**.  

```javascript
if (navigator.xr) {
    navigator.xr.requestSession("immersive-vr").then(session => {
        console.log("VR Session Started!");
    });
} else {
    console.log("WebXR not supported");
}
```

**💡 Explanation:**  
- **WebXR API** enables **VR and AR experiences directly in the browser**.  

---

### **5️⃣ Advanced Caching Strategies - Optimize Service Workers**  
Use **Service Workers** to cache data **more efficiently**.  

```javascript
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(networkResponse => {
                return caches.open("dynamic-cache").then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
});
```

**💡 Explanation:**  
- **Dynamic caching** stores API responses for offline access, reducing server load.  

---

## **🔥 Next Steps**  
📌 Modify **the blockchain example** to validate the integrity of the chain.  
📌 Enhance **WebRTC** with **signaling servers** for real-world applications.  
📌 Extend **IndexedDB storage** to save **large media files**.  
📌 Use **WebXR API** to build a **360° interactive scene**.  

---

## **📚 Useful Resources**  
- [Blockchain in JavaScript (FreeCodeCamp)](https://www.freecodecamp.org/news/learn-blockchain-by-building-one-in-javascript/)  
- [WebRTC (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)  
- [IndexedDB Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)  
- [WebXR API (Google Developers)](https://developer.chrome.com/blog/webxr/)  
- [Service Worker Caching Strategies](https://web.dev/offline-cookbook/)  
