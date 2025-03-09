# **JavaScript Practice - Day 14 🎤📍🎯**  

Welcome to **Day 14** of JavaScript learning! Today, we’ll explore **advanced event handling, speech synthesis, geolocation tracking, drag & drop interactions, and performance profiling** to build more interactive applications.  

---

## **📌 Topics Covered Today**  
✅ Advanced Event Handling (`event delegation`, `once`, `passive listeners`)  
✅ Speech API (Text-to-Speech & Speech Recognition)  
✅ Geolocation API (Get user’s location)  
✅ Drag & Drop API (Interactive UI elements)  
✅ Performance Profiling (`performance.now()`, Chrome DevTools)  

---

## **📝 Exercises**  

### **1️⃣ Advanced Event Handling - Using `once` & `passive` Listeners**  
Optimize event listeners by ensuring they run **only once** and don’t block scrolling.  

```javascript
document.getElementById("clickMe").addEventListener("click", () => {
    console.log("Button clicked!");
}, { once: true }); // Runs only once

document.addEventListener("scroll", () => {
    console.log("User scrolled!");
}, { passive: true }); // Improves performance
```

**💡 Explanation:**  
- `{ once: true }` ensures the event listener **removes itself after the first execution**.  
- `{ passive: true }` prevents event blocking, **improving scroll performance**.  

---

### **2️⃣ Speech API - Convert Text to Speech**  
Make the browser **speak text aloud** using the Speech Synthesis API.  

```javascript
function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

speak("Hello, welcome to JavaScript Day 14!");
```

**💡 Explanation:**  
- The **Speech Synthesis API** allows JavaScript to **convert text into speech**.  

---

### **3️⃣ Geolocation API - Get User's Location**  
Retrieve and display the user’s **current latitude and longitude**.  

```javascript
navigator.geolocation.getCurrentPosition(position => {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}, error => {
    console.log("Error getting location:", error);
});
```

**💡 Explanation:**  
- The **Geolocation API** retrieves **real-time user location** (requires browser permission).  

---

### **4️⃣ Drag & Drop API - Move Elements on the Screen**  
Enable **drag-and-drop functionality** for UI elements.  

```html
<style>
    #dragBox { width: 100px; height: 100px; background: blue; cursor: grab; }
</style>

<div id="dragBox" draggable="true">Drag Me</div>

<script>
    let box = document.getElementById("dragBox");

    box.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text", event.target.id);
    });

    document.body.addEventListener("dragover", event => event.preventDefault());

    document.body.addEventListener("drop", event => {
        let id = event.dataTransfer.getData("text");
        let draggedElement = document.getElementById(id);
        draggedElement.style.position = "absolute";
        draggedElement.style.left = `${event.clientX}px`;
        draggedElement.style.top = `${event.clientY}px`;
    });
</script>
```

**💡 Explanation:**  
- **`dragstart`** stores the dragged item’s ID.  
- **`drop`** moves the item to the new location based on the cursor position.  

---

### **5️⃣ Performance Profiling - Measuring Execution Time**  
Use **`performance.now()`** to measure how fast a function runs.  

```javascript
function testPerformance() {
    let start = performance.now();
    
    let sum = 0;
    for (let i = 0; i < 1e6; i++) sum += i;
    
    let end = performance.now();
    console.log(`Execution time: ${(end - start).toFixed(2)}ms`);
}

testPerformance();
```

**💡 Explanation:**  
- **`performance.now()`** provides a high-resolution **timestamp** for precise performance measurement.  

---

## **🔥 Next Steps**  
📌 Modify the **Speech API example** to read user input aloud.  
📌 Extend the **Drag & Drop example** to allow dropping into specific areas.  
📌 Use **Geolocation API** with Google Maps to display the user's location on a map.  

---

## **📚 Useful Resources**  
- [Advanced Event Handling (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  
- [Speech API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)  
- [Geolocation API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)  
- [Drag & Drop API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)  
- [Performance Profiling (Google Developers)](https://developer.chrome.com/docs/devtools/evaluate-performance/)  
