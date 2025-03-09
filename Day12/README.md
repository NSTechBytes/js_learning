# **JavaScript Practice - Day 12 🎯**  

Welcome to **Day 12** of JavaScript learning! Today, we’ll explore **design patterns, functional programming techniques, and metaprogramming** to improve your JavaScript coding style.  

---

## **📌 Topics Covered Today**  
✅ Design Patterns (Singleton, Factory, Observer)  
✅ Functional Composition (Combining small functions)  
✅ Currying (Breaking functions into smaller functions)  
✅ Tail Call Optimization (Optimizing recursion)  
✅ Metaprogramming (Modifying behavior at runtime)  

---

## **📝 Exercises**  

### **1️⃣ Singleton Pattern - Restricting an Object to a Single Instance**  
Ensure that only **one instance** of an object is created.  

```javascript
const Singleton = (function () {
    let instance;

    function createInstance() {
        return { message: "I am the only instance!" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let obj1 = Singleton.getInstance();
let obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // Output: true (Same instance)
```

**💡 Explanation:**  
- The **Singleton pattern** ensures that a class has only **one instance**.  

---

### **2️⃣ Factory Pattern - Creating Objects Dynamically**  
Use a **factory function** to create objects based on conditions.  

```javascript
function UserFactory(role) {
    if (role === "admin") {
        return { role, permissions: ["create", "read", "update", "delete"] };
    } else {
        return { role, permissions: ["read"] };
    }
}

let admin = UserFactory("admin");
let guest = UserFactory("guest");

console.log(admin); // Output: { role: 'admin', permissions: [...] }
console.log(guest); // Output: { role: 'guest', permissions: ['read'] }
```

**💡 Explanation:**  
- The **Factory Pattern** dynamically creates objects **without using `new`**.  

---

### **3️⃣ Observer Pattern - Subscribing & Notifying Events**  
Create an **Observer pattern** where multiple functions listen to an event.  

```javascript
class Observer {
    constructor() {
        this.subscribers = [];
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    notify(data) {
        this.subscribers.forEach(callback => callback(data));
    }
}

let observer = new Observer();

observer.subscribe(data => console.log("Subscriber 1:", data));
observer.subscribe(data => console.log("Subscriber 2:", data));

observer.notify("Event triggered!"); 
// Output: 
// Subscriber 1: Event triggered!
// Subscriber 2: Event triggered!
```

**💡 Explanation:**  
- The **Observer Pattern** allows multiple functions to react to the same event.  

---

### **4️⃣ Functional Composition - Combining Small Functions**  
Create reusable **small functions** and compose them.  

```javascript
const double = x => x * 2;
const square = x => x * x;

const compose = (f, g) => x => f(g(x));

const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3)); // Output: 36 (3 * 2 = 6, 6^2 = 36)
```

**💡 Explanation:**  
- **Functional composition** allows **combining multiple functions** for cleaner code.  

---

### **5️⃣ Currying - Breaking Functions into Smaller Functions**  
Convert a function that takes multiple arguments into **a series of functions**.  

```javascript
const multiply = a => b => a * b;

let double = multiply(2);
console.log(double(5)); // Output: 10
console.log(multiply(3)(4)); // Output: 12
```

**💡 Explanation:**  
- **Currying** transforms a function so that it takes **one argument at a time**.  

---

### **6️⃣ Tail Call Optimization - Efficient Recursion**  
Optimize recursion using **tail call optimization** to prevent stack overflow.  

```javascript
function factorial(n, acc = 1) {
    if (n === 0) return acc;
    return factorial(n - 1, n * acc);
}

console.log(factorial(5)); // Output: 120
```

**💡 Explanation:**  
- The recursive call is **the last operation**, allowing optimization by the JS engine.  

---

### **7️⃣ Metaprogramming - Modifying Behavior with `Proxy`**  
Use **Proxy** to modify object property behavior dynamically.  

```javascript
let user = {
    name: "Alice",
    age: 25
};

let handler = {
    get(target, property) {
        if (property === "age") {
            return `${target[property]} years old`;
        }
        return target[property];
    }
};

let proxyUser = new Proxy(user, handler);

console.log(proxyUser.age); // Output: "25 years old"
console.log(proxyUser.name); // Output: "Alice"
```

**💡 Explanation:**  
- **Metaprogramming** allows dynamically **modifying object behavior** using `Proxy`.  

---

## **🔥 Next Steps**  
📌 Modify the **Observer Pattern** to allow **unsubscribing**.  
📌 Extend the **Factory Pattern** to create different **types of users**.  
📌 Experiment with **caching functions** using currying and memoization.  

---

## **📚 Useful Resources**  
- [JavaScript Design Patterns (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)  
- [Functional Programming in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Functional_programming)  
- [Currying in JavaScript (FreeCodeCamp)](https://www.freecodecamp.org/news/currying-in-functional-javascript/)  
- [Metaprogramming with Proxy (JavaScript.info)](https://javascript.info/proxy)  