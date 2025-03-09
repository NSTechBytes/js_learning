# **JavaScript Practice - Day 6 🎯**  

Welcome to **Day 6** of JavaScript learning! Today, we’ll explore **classes, async programming, modules, and event delegation** to structure your code better.  

---

## **📌 Topics Covered Today**  
✅ JavaScript Classes (`class`, `constructor`, `this`)  
✅ Promises & `async/await` (Handling asynchronous code)  
✅ JavaScript Modules (`export` & `import`)  
✅ Event Delegation (Efficient event handling)  

---

## **📝 Exercises**  

### **1️⃣ Create a Class (OOP in JavaScript)**  
Define a `Person` class with `name` and `age` properties, and a method to introduce the person.  

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Alex", 25);
person1.introduce();
```

---

### **2️⃣ Use Promises (Simulating an API Call)**  
Create a promise that resolves after 2 seconds with a success message.  

```javascript
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!");
    }, 2000);
});

myPromise.then(response => console.log(response));
```

---

### **3️⃣ Convert Promise to `async/await`**  
Rewrite the previous exercise using `async/await`.  

```javascript
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function getData() {
    let result = await fetchData();
    console.log(result);
}

getData();
```

---

### **4️⃣ JavaScript Modules (`export` & `import`)**  
Create a separate file for utility functions and import them.  

**Step 1: Create a file `utils.js`**  
```javascript
export function greet(name) {
    return `Hello, ${name}!`;
}
```

**Step 2: Import it into another file (`main.js`)**  
```javascript
import { greet } from "./utils.js";
console.log(greet("Alex"));
```

**💡 Note:** This works in **module-based environments** (like Node.js or ES6-compatible browsers).  

---

### **5️⃣ Event Delegation (Efficient Event Handling)**  
Use **event delegation** to handle clicks on multiple buttons efficiently.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Delegation</title>
</head>
<body>
    <div id="buttonContainer">
        <button class="myButton">Button 1</button>
        <button class="myButton">Button 2</button>
        <button class="myButton">Button 3</button>
    </div>

    <script>
        document.getElementById("buttonContainer").addEventListener("click", function(event) {
            if (event.target.classList.contains("myButton")) {
                console.log("You clicked:", event.target.innerText);
            }
        });
    </script>
</body>
</html>
```

---

## **🔥 Next Steps**  
📌 Extend the **Person class** to create a `Student` class with additional properties.  
📌 Modify the **API promise example** to simulate failure and handle errors with `.catch()`.  
📌 Create a **module** that exports multiple functions and import them dynamically.  

---

## **📚 Useful Resources**  
- [JavaScript Classes (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)  
- [JavaScript Promises & Async/Await (W3Schools)](https://www.w3schools.com/js/js_promise.asp)  
- [JavaScript Modules (FreeCodeCamp)](https://www.freecodecamp.org/news/javascript-modules/)  
- [Event Delegation Explained (JavaScript.info)](https://javascript.info/event-delegation)  