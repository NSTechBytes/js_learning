# **JavaScript Practice - Day 22 🎨🎵💰🤖🌐**  

Welcome to **Day 22** of JavaScript learning! Today, we’ll explore **generative art, controlling MIDI devices, smart contracts, AI chatbots with OpenAI, and immersive WebXR experiences** to take your JavaScript skills to the next level.  

---

## **📌 Topics Covered Today**  
✅ **Generative Art with JavaScript** (Creative coding with p5.js)  
✅ **Web MIDI API for Music Control** (Interact with musical instruments)  
✅ **Smart Contract Development with Solidity & Web3.js** (Build blockchain apps)  
✅ **AI Chatbot with OpenAI API** (ChatGPT-powered chatbot)  
✅ **Progressive WebXR Experiences** (AR/VR apps with PWA support)  

---

## **📝 Exercises**  

### **1️⃣ Generative Art - Create Abstract Visuals with p5.js**  
Use **p5.js** to create **dynamic generative art**.  

**Step 1: Install p5.js**  
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
```

**Step 2: Create Abstract Art (`sketch.js`)**  
```javascript
function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background(0);
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let size = random(10, 50);
        fill(random(255), random(255), random(255), 100);
        ellipse(x, y, size, size);
    }
}
```

**💡 Explanation:**  
- **p5.js** makes it easy to create **interactive generative art**.  
- The sketch generates **100 random colorful circles** on the canvas.  

---

### **2️⃣ Web MIDI API - Control Musical Instruments with JavaScript**  
Use the **Web MIDI API** to interact with **MIDI controllers**.  

```javascript
navigator.requestMIDIAccess().then(midiAccess => {
    for (let input of midiAccess.inputs.values()) {
        input.onmidimessage = event => console.log("MIDI Message:", event.data);
    }
});
```

**💡 Explanation:**  
- The **Web MIDI API** enables JavaScript to **receive MIDI signals** from connected devices.  

---

### **3️⃣ Smart Contract Development - Deploy an Ethereum Smart Contract with Web3.js**  
Use **Solidity & Web3.js** to create and interact with a **smart contract**.  

**Step 1: Write a Simple Smart Contract (`Contract.sol`)**  
```solidity
pragma solidity ^0.8.0;

contract SimpleContract {
    string public message;

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
```

**Step 2: Deploy & Interact with Web3.js**  
```javascript
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
contract.methods.setMessage("Hello Blockchain!").send({ from: YOUR_WALLET_ADDRESS });
```

**💡 Explanation:**  
- **Solidity** is used to write **smart contracts** that run on Ethereum.  
- **Web3.js** enables JavaScript to **interact with blockchain contracts**.  

---

### **4️⃣ AI Chatbot with OpenAI API (ChatGPT)**  
Use **OpenAI API** to build a **real-time chatbot** powered by ChatGPT.  

**Step 1: Get an OpenAI API Key**  
[Sign up at OpenAI](https://beta.openai.com/signup/)  

**Step 2: Install `openai` Package**  
```sh
npm install openai
```

**Step 3: Create a Chatbot (`chatbot.js`)**  
```javascript
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({ apiKey: "YOUR_OPENAI_API_KEY" });
const openai = new OpenAIApi(configuration);

async function chatWithAI(prompt) {
    let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100
    });
    console.log("AI Response:", response.data.choices[0].text);
}

chatWithAI("What is JavaScript?");
```

**💡 Explanation:**  
- The chatbot **sends user queries to OpenAI** and receives AI-generated responses.  

---

### **5️⃣ Progressive WebXR Experience - AR/VR in a PWA**  
Combine **WebXR with PWA support** for a **progressive VR experience**.  

**Step 1: Check for WebXR Support**  
```javascript
if (navigator.xr) {
    console.log("WebXR Supported!");
    navigator.xr.requestSession("immersive-vr").then(session => {
        console.log("VR Session Started!");
    });
} else {
    console.log("WebXR Not Supported");
}
```

**Step 2: Add PWA Support (`manifest.json`)**  
```json
{
    "name": "WebXR PWA",
    "short_name": "XR-PWA",
    "start_url": "/index.html",
    "display": "standalone"
}
```

**💡 Explanation:**  
- **WebXR enables AR/VR experiences**, and **PWA makes them installable**.  

---

## **🔥 Next Steps**  
📌 Experiment with **p5.js** to create **procedural landscapes**.  
📌 Enhance **MIDI API** to play **music with JavaScript**.  
📌 Extend **Ethereum smart contract** to handle **token transfers**.  
📌 Train **OpenAI API chatbot** to respond with **context-aware replies**.  
📌 Build a **WebXR game** using **Three.js** and **WebXR API**.  

---

## **📚 Useful Resources**  
- [p5.js for Generative Art](https://p5js.org/)  
- [Web MIDI API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API)  
- [Solidity & Smart Contracts (Ethereum)](https://soliditylang.org/)  
- [OpenAI API for AI Chatbots](https://beta.openai.com/docs/)  
- [WebXR & Progressive Web Apps](https://immersiveweb.dev/)  
