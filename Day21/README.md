# **JavaScript Practice - Day 21 🧠🔌💰🤖**  

Welcome to **Day 21** of JavaScript learning! Today, we’ll explore **neural networks, hardware access, decentralized applications, AI chatbots, and ultra-light UI frameworks** to master cutting-edge JavaScript.  

---

## **📌 Topics Covered Today**  
✅ **Neural Networks in JavaScript** (Training AI with Brain.js)  
✅ **Hardware Access via WebUSB API** (Interfacing with physical devices)  
✅ **Decentralized Apps (dApps) with Web3.js** (Smart contracts & Ethereum)  
✅ **Real-Time AI Chatbots** (Building an AI-powered chatbot)  
✅ **Hyperapp for Ultra-Light UI Development** (Super-fast web applications)  

---

## **📝 Exercises**  

### **1️⃣ Neural Networks in JavaScript - Train an AI with Brain.js**  
Use **Brain.js** to train a simple **neural network**.  

**Step 1: Install Brain.js**  
```sh
npm install brain.js
```

**Step 2: Train the AI in `main.js`**  
```javascript
const brain = require("brain.js");

const net = new brain.NeuralNetwork();
net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]);

console.log(net.run([1, 0])); // Expected output: Close to 1
```

**💡 Explanation:**  
- **Brain.js** is a **simple JavaScript neural network library**.  
- The network learns **XOR logic** from training data.  

---

### **2️⃣ WebUSB API - Connect to External Hardware**  
Use **WebUSB API** to communicate with a **USB device**.  

```javascript
async function connectUSB() {
    let device = await navigator.usb.requestDevice({ filters: [] });
    await device.open();
    console.log("Connected to:", device.productName);
}

connectUSB();
```

**💡 Explanation:**  
- The **WebUSB API** enables **direct communication with USB devices** from the browser.  

---

### **3️⃣ Decentralized Apps (dApps) with Web3.js - Interact with Ethereum**  
Use **Web3.js** to connect to the **Ethereum blockchain**.  

**Step 1: Install Web3.js**  
```sh
npm install web3
```

**Step 2: Connect to Ethereum Network**  
```javascript
const Web3 = require("web3");
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

web3.eth.getBlockNumber().then(console.log);
```

**💡 Explanation:**  
- **Web3.js** allows JavaScript to interact with the **Ethereum blockchain**.  
- The example retrieves **the latest block number** from the network.  

---

### **4️⃣ Real-Time AI Chatbot - Create an Interactive AI Chatbot**  
Use **Natural.js** to build a **basic AI chatbot**.  

**Step 1: Install Natural.js**  
```sh
npm install natural
```

**Step 2: Train the Chatbot**  
```javascript
const natural = require("natural");
const tokenizer = new natural.WordTokenizer();

const responses = {
    hello: "Hi there! How can I assist you?",
    bye: "Goodbye! Have a great day!",
    weather: "The weather is nice today!"
};

function chatbot(input) {
    let words = tokenizer.tokenize(input.toLowerCase());
    for (let word of words) {
        if (responses[word]) return responses[word];
    }
    return "I'm not sure how to respond to that.";
}

console.log(chatbot("hello")); // Output: Hi there! How can I assist you?
```

**💡 Explanation:**  
- **Natural.js** is an NLP (Natural Language Processing) library for JavaScript.  
- The chatbot tokenizes input and responds based on predefined phrases.  

---

### **5️⃣ Hyperapp - Build a Super-Fast UI**  
Use **Hyperapp**, a **lightweight UI framework** (only 1kb).  

**Step 1: Install Hyperapp**  
```sh
npm install hyperapp
```

**Step 2: Create a Simple Counter App**  
```javascript
import { h, app } from "hyperapp";

const state = { count: 0 };

const actions = {
    increment: () => state => ({ count: state.count + 1 }),
    decrement: () => state => ({ count: state.count - 1 })
};

const view = (state, actions) =>
    h("div", {}, [
        h("h1", {}, state.count),
        h("button", { onclick: actions.increment }, "+"),
        h("button", { onclick: actions.decrement }, "-")
    ]);

app(state, actions, view, document.body);
```

**💡 Explanation:**  
- **Hyperapp** is a **super-fast virtual DOM framework** for JavaScript.  

---

## **🔥 Next Steps**  
📌 Train **Brain.js** to classify real-world data.  
📌 Use **WebUSB API** to control **an Arduino device**.  
📌 Extend **Web3.js** to make transactions on the Ethereum network.  
📌 Improve **the AI chatbot** using **machine learning-based intent detection**.  
📌 Build a **Hyperapp-based UI** for a **real-world web application**.  

---

## **📚 Useful Resources**  
- [Brain.js - Neural Networks in JavaScript](https://brain.js.org/)  
- [WebUSB API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API)  
- [Web3.js for Ethereum dApps](https://web3js.readthedocs.io/)  
- [Natural.js - NLP for JavaScript](https://github.com/NaturalNode/natural)  
- [Hyperapp (Tiny UI Framework)](https://hyperapp.dev/)  
