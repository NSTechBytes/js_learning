# **JavaScript Practice - Day 3 🎯**

Welcome to **Day 3** of JavaScript learning! Today, we’ll explore  **objects** , more  **conditionals** , and start working with **events** in the browser.

---

## **📌 Topics Covered Today**

✅ JavaScript Objects

✅ Conditional Statements (`if`, `else if`, `else`)

✅ Event Handling (click events in the browser)

✅ Combining Functions & Objects

---

## **📝 Exercises**

### **1️⃣ Create an Object (Person Details)**

Define an object that represents a person with properties like `name`, `age`, and `city`, then print their details.

```javascript
let person = {
    name: "Alex",
    age: 25,
    city: "New York"
};
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("City: " + person.city);
```

---

### **2️⃣ Check Voting Eligibility (Conditionals)**

Write a program that checks if a person is eligible to vote (18+ years).

```javascript
let age = 17; // Try changing this value
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
```

---

### **3️⃣ Change Background Color on Button Click (Event Handling)**

Create a simple button that changes the background color when clicked.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Change Color</title>
</head>
<body>
    <button onclick="changeColor()">Click Me</button>
    <script>
        function changeColor() {
            document.body.style.backgroundColor = "lightblue";
        }
    </script>
</body>
</html>
```

**💡 Note:** Save this as an `.html` file and open it in a browser!

---

### **4️⃣ Create a Function Inside an Object**

Define an object `car` with properties like `brand` and `year`, and a method that prints a message.

```javascript
let car = {
    brand: "Toyota",
    year: 2022,
    displayInfo: function() {
        console.log("This car is a " + this.year + " " + this.brand + ".");
    }
};
car.displayInfo();
```

---

### **5️⃣ Rock, Paper, Scissors Game (User Input & Conditionals)**

Write a simple **Rock, Paper, Scissors** game where the user enters their choice, and the computer randomly picks one.

```javascript
let choices = ["rock", "paper", "scissors"];
let userChoice = prompt("Choose rock, paper, or scissors:");
let computerChoice = choices[Math.floor(Math.random() * 3)];

console.log("You chose: " + userChoice);
console.log("Computer chose: " + computerChoice);

if (userChoice === computerChoice) {
    console.log("It's a tie!");
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    console.log("You win!");
} else {
    console.log("You lose!");
}
```

---

## **🔥 Next Steps**

📌 Try adding **more properties** to the object exercises.

📌 Modify the button to **toggle** between two colors.

📌 Improve the **Rock, Paper, Scissors** game by handling invalid inputs.

---

## **📚 Useful Resources**

* [JavaScript Objects (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
* [JavaScript Events (W3Schools)](https://www.w3schools.com/js/js_events.asp)
* [JavaScript Conditionals (FreeCodeCamp)](https://www.freecodecamp.org/news/javascript-if-else-and-else-if-explained/)

