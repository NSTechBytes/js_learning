# **JavaScript Practice - Day 15 🔒📂📢📹**  

Welcome to **Day 15** of JavaScript learning! Today, we’ll explore **security best practices, encrypting/decrypting data, handling files, push notifications, and real-time video streaming**.  

---

## **📌 Topics Covered Today**  
✅ Security Best Practices (Sanitization, XSS & CSRF Protection)  
✅ Web Cryptography API (Encrypting & Decrypting Data)  
✅ File Handling (Reading & Uploading Files)  
✅ Push Notifications (Browser Notifications API)  
✅ WebRTC (Real-Time Video & Audio Streaming)  

---

## **📝 Exercises**  

### **1️⃣ Security Best Practices - Preventing XSS & CSRF**  
Sanitize user input to prevent **Cross-Site Scripting (XSS)**.  

```javascript
function sanitizeInput(input) {
    let div = document.createElement("div");
    div.innerText = input;
    return div.innerHTML;
}

let userInput = "<script>alert('Hacked!')</script>";
console.log(sanitizeInput(userInput)); // Output: &lt;script&gt;alert('Hacked!')&lt;/script&gt;
```

**💡 Explanation:**  
- **XSS occurs** when attackers inject malicious scripts into a webpage.  
- This function **escapes special characters**, preventing script execution.  

---

### **2️⃣ Web Cryptography API - Encrypt & Decrypt Data**  
Use the **Web Crypto API** to securely encrypt and decrypt messages.  

```javascript
async function encryptData(message) {
    let encoder = new TextEncoder();
    let data = encoder.encode(message);

    let key = await crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    let iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization vector
    let encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
    
    console.log("Encrypted Data:", new Uint8Array(encrypted));
}

encryptData("Hello Secure World!");
```

**💡 Explanation:**  
- **AES-GCM encryption** protects sensitive data in web apps.  
- `crypto.subtle.encrypt()` provides **modern encryption** support.  

---

### **3️⃣ File Handling - Read & Upload Files**  
Allow users to **upload and preview a file**.  

```html
<input type="file" id="fileInput">
<img id="preview" style="max-width: 300px;">

<script>
    document.getElementById("fileInput").addEventListener("change", function (event) {
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function () {
            document.getElementById("preview").src = reader.result;
        };

        reader.readAsDataURL(file);
    });
</script>
```

**💡 Explanation:**  
- **FileReader API** reads and previews images dynamically.  

---

### **4️⃣ Push Notifications - Send Browser Notifications**  
Request permission and send a **push notification**.  

```javascript
if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Hello! This is your push notification.");
        }
    });
}
```

**💡 Explanation:**  
- **Push Notifications API** enables browser notifications.  
- The user **must grant permission** before notifications are shown.  

---

### **5️⃣ WebRTC - Real-Time Video Streaming**  
Access the **user’s camera and display the video feed**.  

```html
<video id="videoStream" autoplay></video>

<script>
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            document.getElementById("videoStream").srcObject = stream;
        })
        .catch(error => console.log("Error accessing camera:", error));
</script>
```

**💡 Explanation:**  
- **WebRTC API** enables **peer-to-peer video and audio streaming** in real-time.  
- `getUserMedia()` requests **camera access** from the user.  

---

## **🔥 Next Steps**  
📌 Extend **File Handling** to support multiple files.  
📌 Modify **Push Notifications** to trigger based on user actions.  
📌 Enhance **WebRTC** to allow video **calling between users**.  

---

## **📚 Useful Resources**  
- [Web Security Best Practices (OWASP)](https://owasp.org/www-project-top-ten/)  
- [Web Cryptography API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)  
- [File Handling in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/File_API)  
- [Push Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)  
- [WebRTC & Real-Time Communication](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)  
