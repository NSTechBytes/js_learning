# **JavaScript Practice - Day 9 🏗️**  

Welcome to **Day 9** of JavaScript learning! Today, we’ll explore **prototypes, object-oriented patterns, symbols, and iterators** to better understand JavaScript’s inheritance system.  

---

## **📌 Topics Covered Today**  
✅ Prototypes & Prototypal Inheritance (`Object.create`)  
✅ Factory Pattern vs Constructor Pattern  
✅ JavaScript Symbols (`Symbol()`)  
✅ Iterators (`next()` method)  

---

## **📝 Exercises**  

### **1️⃣ Understanding Prototypes**  
Check how JavaScript objects inherit properties from prototypes.  

```javascript
let person = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

let user = Object.create(person); // Inherits from person
user.name = "Alice";
user.greet(); // Output: Hello, my name is Alice
```

**💡 Explanation:**  
- `Object.create(person)` creates a new object (`user`) with `person` as its prototype.  
- `user` doesn’t have a `greet` method directly, but it can access it from `person`.  

---

### **2️⃣ Constructor Function (Prototypal Inheritance Alternative)**  
Use a constructor function to create multiple objects with shared methods.  

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.sayHello = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};

let user1 = new User("Bob", 30);
let user2 = new User("Alice", 25);

user1.sayHello(); // Output: Hi, I'm Bob and I'm 30 years old.
user2.sayHello(); // Output: Hi, I'm Alice and I'm 25 years old.
```

---

### **3️⃣ Factory Pattern (Alternative to Constructor Functions)**  
Create a factory function that returns objects.  

```javascript
function createUser(name, age) {
    return {
        name,
        age,
        sayHello() {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
        }
    };
}

let user3 = createUser("Charlie", 22);
user3.sayHello(); // Output: Hi, I'm Charlie and I'm 22 years old.
```

**💡 Difference Between Factory & Constructor Pattern:**  
- **Factory Pattern**: Returns a new object explicitly (`return {}`), no need for `new`.  
- **Constructor Pattern**: Uses `new` and attaches methods to `prototype`.  

---

### **4️⃣ Using Symbols for Unique Object Properties**  
Use `Symbol` to create unique object properties.  

```javascript
let id = Symbol("id");

let user = {
    name: "Alice",
    [id]: 12345 // Symbol key
};

console.log(user.name); // Output: Alice
console.log(user.id); // Output: undefined (normal property lookup doesn't work)
console.log(user[id]); // Output: 12345
```

**💡 Why Use Symbols?**  
- Prevents accidental property name conflicts.  
- Hidden from `Object.keys()` and `for...in` loops.  

---

### **5️⃣ Creating an Iterator Manually**  
Implement a custom iterator that generates numbers up to a given limit.  

```javascript
function createNumberIterator(limit) {
    let count = 0;
    return {
        next: function () {
            if (count < limit) {
                return { value: count++, done: false };
            } else {
                return { done: true };
            }
        }
    };
}

let iterator = createNumberIterator(3);

console.log(iterator.next()); // Output: { value: 0, done: false }
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { done: true }
```

**💡 Explanation:**  
- Each call to `next()` moves the iterator forward.  
- Once the limit is reached, `done: true` is returned.  

---

## **🔥 Next Steps**  
📌 Extend the **prototypal inheritance example** to include more properties & methods.  
📌 Modify the **iterator** to generate Fibonacci numbers.  
📌 Use **Symbols** to store private properties in a class.  

---

## **📚 Useful Resources**  
- [JavaScript Prototypes (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)  
- [Factory vs Constructor Pattern (JavaScript.info)](https://javascript.info/constructor-new)  
- [JavaScript Symbols Explained](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)  
- [Iterators & Generators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)  