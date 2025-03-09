# **JavaScript Practice - Day 24 🎥🧠📡🎮🔒**  

Welcome to **Day 24** of JavaScript learning! Today, we’ll explore **AI-driven video editing, brain-computer interfaces, IoT messaging with MQTT, real-time 3D graphics, and privacy-enhancing cryptographic techniques** to take your JavaScript skills to the next level.  

---

## **📌 Topics Covered Today**  
✅ **AI-Powered Video Editing with JavaScript** (Automate video processing with FFmpeg.js)  
✅ **Brain-Controlled Interfaces (BCI) with JavaScript** (Use EEG data for mind-controlled apps)  
✅ **IoT Communication with MQTT.js** (Publish & subscribe to real-time messages)  
✅ **Real-Time 3D Graphics with Three.js** (Create interactive 3D scenes)  
✅ **Secure Multi-Party Computation (MPC) in JavaScript** (Privacy-preserving computation)  

---

## **📝 Exercises**  

### **1️⃣ AI-Powered Video Editing with JavaScript - Trim and Convert Videos**  
Use **FFmpeg.js** to **process videos directly in JavaScript**.  

**Step 1: Install FFmpeg.js**  
```sh
npm install @ffmpeg/ffmpeg
```

**Step 2: Trim a Video in JavaScript (`videoEditor.js`)**  
```javascript
import { createFFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

async function trimVideo(inputFile) {
    await ffmpeg.load();
    ffmpeg.FS("writeFile", "input.mp4", await fetch(inputFile).then(res => res.arrayBuffer()));
    
    await ffmpeg.run("-i", "input.mp4", "-t", "5", "-c:v", "libx264", "output.mp4");
    
    let output = ffmpeg.FS("readFile", "output.mp4");
    console.log("Trimmed video:", URL.createObjectURL(new Blob([output.buffer], { type: "video/mp4" })));
}

trimVideo("example.mp4");
```

**💡 Explanation:**  
- **FFmpeg.js** enables video **trimming, conversion, and processing** in the browser.  

---

### **2️⃣ Brain-Controlled Interfaces (BCI) with JavaScript**  
Use **Neurosity Notion API** to read **brainwave activity** and control apps.  

```javascript
import { Notion } from "@neurosity/notion";

const device = new Notion({ deviceId: "your-device-id" });

device.login({ email: "your-email", password: "your-password" }).then(() => {
    device.brainwaves("raw").subscribe(brainwave => {
        console.log("Brainwave Data:", brainwave);
    });
});
```

**💡 Explanation:**  
- This code **connects to a brainwave sensor** and streams **EEG data** in real time.  

---

### **3️⃣ IoT Communication with MQTT.js - Publish & Subscribe to Messages**  
Use **MQTT.js** to connect **JavaScript applications with IoT devices**.  

**Step 1: Install MQTT.js**  
```sh
npm install mqtt
```

**Step 2: Publish & Subscribe to MQTT Topics (`mqttClient.js`)**  
```javascript
const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
    console.log("Connected to MQTT broker");
    client.subscribe("iot/sensor");

    client.publish("iot/sensor", JSON.stringify({ temperature: 25 }));
});

client.on("message", (topic, message) => {
    console.log(`Received data from ${topic}:`, message.toString());
});
```

**💡 Explanation:**  
- **MQTT.js** allows JavaScript to **send and receive real-time messages** in IoT applications.  

---

### **4️⃣ Real-Time 3D Graphics with Three.js - Create an Interactive Cube**  
Use **Three.js** to **render real-time 3D objects** in the browser.  

**Step 1: Install Three.js**  
```sh
npm install three
```

**Step 2: Create a Rotating Cube (`threeScene.js`)**  
```javascript
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
```

**💡 Explanation:**  
- **Three.js** creates a **3D rotating cube** in the browser using **WebGL**.  

---

### **5️⃣ Secure Multi-Party Computation (MPC) in JavaScript**  
Use **MP-SPDZ** to perform **privacy-preserving computation between multiple parties**.  

**Step 1: Install `spdz-client` for Secure Computation**  
```sh
npm install spdz-client
```

**Step 2: Perform Secure Computation (`mpcExample.js`)**  
```javascript
const spdz = require("spdz-client");

async function secureComputation(a, b) {
    let party1 = await spdz.input(a);
    let party2 = await spdz.input(b);
    
    let sum = spdz.add(party1, party2);
    console.log("Secure Computation Result:", await sum.output());
}

secureComputation(5, 10);
```

**💡 Explanation:**  
- **MPC (Multi-Party Computation)** allows multiple users to **compute results without revealing their inputs**.  

---

## **🔥 Next Steps**  
📌 Extend **FFmpeg.js** to apply **video filters and effects**.  
📌 Use **BCI API** to control a **robotic arm** with brain signals.  
📌 Connect **MQTT with real IoT sensors** (like temperature monitors).  
📌 Enhance **Three.js scene** with **lighting and physics**.  
📌 Implement **MPC to securely compute salaries without revealing individual incomes**.  

---

## **📚 Useful Resources**  
- [FFmpeg.js for Video Editing](https://ffmpeg.org/)  
- [Neurosity Notion (Brainwave API)](https://neurosity.co/)  
- [MQTT.js for IoT](https://www.npmjs.com/package/mqtt)  
- [Three.js (Real-Time 3D)](https://threejs.org/)  
- [Secure Multi-Party Computation (MPC)](https://mp-spdz.readthedocs.io/)  
