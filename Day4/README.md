# **JavaScript Practice - Day 4 🏗️**  

Welcome to **Day 4** of JavaScript learning! Today, you’ll learn how to **interact with the webpage using the DOM**, use **higher-order functions**, and **handle errors properly**.  

---

## **📌 Topics Covered Today**  
✅ DOM Manipulation (`document.getElementById`, `querySelector`)  
✅ Higher-Order Functions (`map`, `filter`, `forEach`)  
✅ Error Handling (`try...catch`)  
✅ Event Listeners (Handling multiple events)  

---

## **📝 Exercises**  

### **1️⃣ Change Text Using JavaScript (DOM Manipulation)**  
Modify the text of an HTML element when a button is clicked.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Change Text</title>
</head>
<body>
    <h1 id="title">Hello, World!</h1>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById("title").innerText = "Hello, JavaScript!";
        }
    </script>
</body>
</html>
```

**💡 Note:** Save this as an `.html` file and open it in a browser!  

---

### **2️⃣ Filter Even Numbers (Higher-Order Functions - `filter`)**  
Write a function that filters out even numbers from an array.  

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

---

### **3️⃣ Double Each Number (Higher-Order Functions - `map`)**  
Write a function that doubles each number in an array.  

```javascript
let nums = [1, 2, 3, 4, 5];
let doubledNums = nums.map(num => num * 2);
console.log(doubledNums); // Output: [2, 4, 6, 8, 10]
```

---

### **4️⃣ Handle Errors Gracefully (Error Handling - `try...catch`)**  
Write a program that catches an error when trying to access an undefined variable.  

```javascript
try {
    console.log(myVariable); // This will cause an error
} catch (error) {
    console.log("An error occurred: " + error.message);
}
```

---

### **5️⃣ Change Background Color on Button Click (Event Listener)**  
Modify an element’s background color using **`addEventListener`**.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener Example</title>
</head>
<body>
    <button id="colorButton">Change Color</button>

    <script>
        document.getElementById("colorButton").addEventListener("click", function() {
            document.body.style.backgroundColor = "lightcoral";
        });
    </script>
</body>
</html>
```

---

## **🔥 Next Steps**  
📌 Try using `querySelectorAll` to modify **multiple elements** at once.  
📌 Create an **event listener** that detects when the user hovers over a button.  
📌 Modify the **error-handling code** to log different errors based on the situation.  

---

## **📚 Useful Resources**  
- [JavaScript DOM Manipulation (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)  
- [Higher-Order Functions (W3Schools)](https://www.w3schools.com/js/js_function_definition.asp)  
- [Error Handling in JavaScript (FreeCodeCamp)](https://www.freecodecamp.org/news/error-handling-in-javascript/)  
