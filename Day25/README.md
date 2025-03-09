# **JavaScript Practice - Day 25 🎙️🚁🔐🎮👁️**  

Welcome to **Day 25** of JavaScript learning! Today, we’ll explore **voice cloning, drone programming, blockchain identity verification, multiplayer gaming, and computer vision** to expand your JavaScript expertise.  

---

## **📌 Topics Covered Today**  
✅ **AI-Powered Voice Cloning with JavaScript** (Clone voices using ElevenLabs API)  
✅ **JavaScript for Drones with Node.js** (Control drones with JavaScript)  
✅ **Blockchain-Based Identity Verification** (Decentralized identity with Web3.js)  
✅ **WebSockets for Multiplayer Gaming** (Real-time game communication)  
✅ **Computer Vision with OpenCV.js** (Face detection in JavaScript)  

---

## **📝 Exercises**  

### **1️⃣ AI-Powered Voice Cloning with JavaScript**  
Use **ElevenLabs API** to **clone voices and generate speech**.  

**Step 1: Install `axios` for API Calls**  
```sh
npm install axios
```

**Step 2: Generate Speech from a Cloned Voice (`voiceClone.js`)**  
```javascript
const axios = require("axios");

async function generateSpeech(text) {
    let response = await axios.post(
        "https://api.elevenlabs.io/v1/text-to-speech",
        { text, voice_id: "YOUR_VOICE_ID" },
        { headers: { "Authorization": "Bearer YOUR_API_KEY" } }
    );

    console.log("Generated Audio URL:", response.data.audio_url);
}

generateSpeech("Hello, this is an AI-cloned voice!");
```

**💡 Explanation:**  
- This API **generates realistic AI speech** using a cloned voice.  

---

### **2️⃣ JavaScript for Drones - Control a DJI Tello Drone**  
Use **Node.js & Tello SDK** to **fly a drone with JavaScript**.  

**Step 1: Install `dgram` for UDP Communication**  
```sh
npm install dgram
```

**Step 2: Control the Drone (`droneControl.js`)**  
```javascript
const dgram = require("dgram");
const drone = dgram.createSocket("udp4");

drone.send("command", 0, 7, 8889, "192.168.10.1", () => {
    console.log("Drone in command mode");
});

setTimeout(() => {
    drone.send("takeoff", 0, 7, 8889, "192.168.10.1");
    console.log("Drone taking off!");
}, 3000);
```

**💡 Explanation:**  
- **JavaScript can control real-world drones** using the **DJI Tello SDK**.  

---

### **3️⃣ Blockchain-Based Identity Verification**  
Use **Ethereum & Web3.js** to build **decentralized identity verification**.  

**Step 1: Install Web3.js**  
```sh
npm install web3
```

**Step 2: Verify a Blockchain Identity (`identityVerification.js`)**  
```javascript
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

async function verifyIdentity(address) {
    let balance = await web3.eth.getBalance(address);
    console.log(`User balance: ${web3.utils.fromWei(balance, "ether")} ETH`);
}

verifyIdentity("0xYourEthereumAddress");
```

**💡 Explanation:**  
- **Web3.js enables identity verification** using **Ethereum smart contracts**.  

---

### **4️⃣ WebSockets for Multiplayer Gaming**  
Use **WebSockets** for **real-time multiplayer game communication**.  

**Step 1: Create a WebSocket Server (`server.js`)**  
```javascript
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", socket => {
    console.log("Player connected");

    socket.on("message", message => {
        console.log("Received:", message);
        server.clients.forEach(client => client.send(message));
    });
});
```

**Step 2: Connect Players to the Server (`gameClient.js`)**  
```javascript
let socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => socket.send("Player joined the game!");
socket.onmessage = event => console.log("Game Update:", event.data);
```

**💡 Explanation:**  
- **WebSockets enable real-time communication** between multiple players.  

---

### **5️⃣ Computer Vision with OpenCV.js - Detect Faces in JavaScript**  
Use **OpenCV.js** for **real-time face detection** in the browser.  

**Step 1: Include OpenCV.js in HTML**  
```html
<script src="https://docs.opencv.org/4.x/opencv.js"></script>
```

**Step 2: Detect Faces in a Video Stream (`faceDetection.js`)**  
```javascript
async function detectFaces() {
    let video = document.createElement("video");
    video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });
    video.play();

    let faceCascade = new cv.CascadeClassifier();
    faceCascade.load("haarcascade_frontalface_default.xml");

    setInterval(() => {
        let frame = new cv.Mat(video);
        let faces = new cv.RectVector();
        faceCascade.detectMultiScale(frame, faces);

        console.log(`Faces detected: ${faces.size()}`);
    }, 1000);
}

detectFaces();
```

**💡 Explanation:**  
- **OpenCV.js detects faces in real-time** using **Haar cascades**.  

---

## **🔥 Next Steps**  
📌 Extend **voice cloning** to support **real-time speech synthesis**.  
📌 Program **JavaScript-controlled drone formations** using AI.  
📌 Implement **blockchain-based login systems** for decentralized identity.  
📌 Improve **WebSockets for multiplayer game sync** and collision detection.  
📌 Use **OpenCV.js to track objects in video feeds**.  

---

## **📚 Useful Resources**  
- [ElevenLabs AI Voice Cloning](https://elevenlabs.io/)  
- [DJI Tello Drone SDK](https://github.com/dji-sdk/Tello-Python)  
- [Ethereum Web3.js Docs](https://web3js.readthedocs.io/)  
- [WebSockets (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)  
- [OpenCV.js for Computer Vision](https://docs.opencv.org/4.x/opencv.js)  
