// Backend HomeWork
// 1. Write a standard function called greetUser that accepts two parameters: firstName and lastName.
// The function should console.log a message saying: "Hello, [firstName] [lastName]! Welcome to the backend."

function greetUser(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}! Welcome to the backend.`);
}

greetUser("Ogunsanwo", "Olajesu");

// 2. Write a function called celsiusToFahrenheit that takes a temperature in Celsius.
//Calculate the Fahrenheit value (C * 9/5) + 32. Do not console.log inside the function. Instead, return the calculated value. Call the function, store the result in a variable, and log the variable.

function celsiusToFahrenheit(C) {
  let F = (C * 9) / 5 + 32;
  return F;
}

let result = celsiusToFahrenheit(100);
console.log(result);

// 3. Write a function called isEven that takes a number.
// If the number is even, return the boolean true. If odd, return false. Write a second function called processNumber that uses isEven to print either "Proceed" or "Access Denied".

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(20));

// function processNumber(num) {
//   if (isEven(num) === true) {
//     return "Proceed";
//   } else {
//     return "Access Denied";
//   }
// }
// console.log(processNumber(21));

// 4. The Bill Calculator (Helper Functions)
// Write two functions. The first, calculateTax, takes an amount and returns the tax (e.g., 8%).
// The second function, calculateTotal, takes a subtotal, calls calculateTax inside it, adds the tax to the subtotal, and returns the final price.

// function calculateTax (amount) {
//     return amount * (8/100);
// }
// console.log(calculateTax(10000));

// function calculateTotal (subtotal){
//   let tax = calculateTax(subtotal);
//   let total = subtotal + tax;

//   return total;
// }

// console.log(calculateTotal(10000));

// 5. User Profile Builder (ES6 Default Parameters)
// Write a function createProfile that accepts username, age, and role.
// Assign a default value of "user" to the role parameter. Call the function once providing all three arguments, and once providing only username and age to prove the default role works.

function createProfile(username, age, role = "user") {
  return `${username}, ${age}, ${role}`;
}

console.log(createProfile("Ayodele", 24, "admin"));
console.log(createProfile("Drey", 19));

// 6. The Syntax Switch (Arrow Functions)
// Take the calculateTotal and isEven functions you wrote in Part 1 and rewrite them using ES6 Arrow Function syntax (const myFunc = () => {}).
// Practice using implicit returns (omitting the {} and return keyword) for single-line arrow functions.

const calculateTax = (amount) => {
  return amount * (8 / 100);
};

const calculateTotal = (subtotal) => {
  let tax = calculateTax(subtotal);
  let total = subtotal + tax;

  return total;
};

console.log(calculateTotal(10000));

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(20));

// 7. The Mini Calculator (Basic Callback)
// Task: Write a function called calculator that takes three arguments: num1, num2, and operationCallback.
// Logic: Write two separate arrow functions: add and multiply. Call calculator(5, 10, add) and calculator(5, 10, multiply) to see how the callback changes the function's behavior.

function calculator(num1, num2, operationCallback) {
  return operationCallback(num1, num2);
}

const add = (num1, num2) => {
  return num1 + num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log(calculator(5, 10, add));
console.log(calculator(5, 10, multiply));

// 8. String Transformer (Passing Callbacks)
// Task: Write a function processString that takes a string and a callback function.
// Logic: The function should pass the string to the callback. Create two callbacks: makeUppercase and countCharacters. Test processString with both callbacks.

function processString(string, callback) {
  return callback(string);
}

const makeUppercase = (string) => {
  return string.toUpperCase();
};
const countCharacters = (string) => {
  return string.length;
};

console.log(processString("hello", makeUppercase));
console.log(processString("regurgitate", countCharacters));

// 9. The Delay Simulator (Intro to Async Callbacks)
// Task: Write a function fetchMockData that takes a callback.
// Logic: Inside the function, use JavaScript's built-in setTimeout. Have it wait 2000 milliseconds (2 seconds) before executing the callback function with a mock string like "Database connection established."

function fetchMockData(callback) {
  setTimeout(() => {
    callback("Database connection established.");
  }, 2000);
}

fetchMockData((message) => {
  console.log(message);
});

// 10. Execution Order (Understanding Callback Flow)
// Task: Write a script that logs "1. Request Received", then calls setTimeout to log "2. Processing Data" after 1 second, and immediately logs "3. Sending Response" outside the timeout.
// Logic: Run the code. Observe and document why "3" prints before "2". This is crucial for backend event loops.

function logger(log1, log2, log3) {
  console.log("1. Request Received");
  setTimeout(() => {
    console.log("2. Processing Data");
  }, 1000);
  console.log("3. Sending Response");
}

logger();

// 11. The Blueprint (Object Methods)
// Task: Create a databaseConfig object. Give it properties for host, port, dbName, and password.
// Logic: Add a method (a function inside the object) called getConnectionString that returns a formatted string: "mongodb://[host]:[port]/[dbName]".

const databaseConfig = {
  host: "Dexter",
  port: 5510,
  dbName: "flame",
  password: 12345,
  getConnectionString: function () {
    return `mongodb://${this.host}:${this.port}/${this.dbName}.`;
  },
};

console.log(databaseConfig.getConnectionString());

// 12. The Data Extractor (Object Destructuring)
// Task: Create a complex object called student with properties: name, cohort, stack, and a nested object grades containing html and javascript scores.
// Logic: Use ES6 object destructuring to extract name, stack, and javascript grade into independent variables in a single line of code.

const student = {
  name: "Harry Osbourne",
  cohort: "September",
  stack: "Back-End",
  grades: {
    html: 80,
    javascript: 79,
  },
};

// destructuring
const {
  name,
  stack,
  grades: { javascript },
} = student;

console.log(name, stack, javascript);

// 13. Variable Swapping (Array Destructuring)
// Task: Create an array of top three high scores: [95, 87, 72].
// Logic: Use array destructuring to assign the first score to a variable called firstPlace and the second to secondPlace.

const scores = [95, 87, 72];
const [firstPlace, secondPlace] = scores;
console.log(firstPlace, secondPlace);

// 14. The Safe Copy (Spread Operator)
// Task: Create an object userSettings with theme: "dark" and notifications: true. Create a second object userProfile with name and email.
// Logic: Create a third object called fullUserRecord using the spread operator (...) to merge the first two objects together without modifying the originals.
const userSettings = {
  theme: "dark",
  notifications: true,
};
const userProfile = {
  name: "Jane Holt",
  email: "janeholt@gmail.com",
};

const fullUserRecord = { ...userSettings, ...userProfile };
console.log(userSettings);
console.log(userProfile);
console.log(fullUserRecord);

// 15. The Infinite Adder (Rest Parameters)
// Task: Write an arrow function called sumAll that takes an unknown amount of numbers as arguments.
// Logic: Use the rest parameter (...numbers) to gather them into an array, and write logic to add them all together. Test it with sumAll(2, 4) and sumAll(1, 2, 3, 4, 5).

const sumAll = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(sumAll(2, 4));
console.log(sumAll(1, 2, 3, 4, 5));

// 16. The Traditional Scanner (For Loop)
// Task: Create an array of strings representing usernames.
// Logic: Write a traditional for loop (using let i = 0) that iterates over the array. If a username is exactly 4 characters long, push it into a new array called shortNames.

const usernames = [
  "Ace",
  "Jay",
  "ShadowX",
  "CodeMaster",
  "Drex",
  "NightWolf",
  "BackendDev",
];

const shortNames = [];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i].length <= 4) {
    shortNames.push(usernames[i]);
  }
}

console.log(shortNames);

// 17. Data Transformation (map)
// Task: Create an array of objects representing products. Each object needs a name and a price in Naira (e.g., 5000).
// Logic: Use the array .map() method to create a new array containing only the prices, but converted to Dollars (divide by roughly 1500).

const products = [
  {
    name: "Laptop",
    price: 450000,
  },
  {
    name: "Mobile Phone",
    price: 250000,
  },
  {
    name: "Headphones",
    price: 35000,
  },
  {
    name: "Keyboard",
    price: 20000,
  },
  {
    name: "Mouse",
    price: 12000,
  },
];

const prices = products.map((p) => {
  return (p.price / 1500).toFixed(2);
});

console.log(prices);

// 18. The Search Engine (filter)
// Task: Create an array of user objects. Each has name, age, and isActive (boolean).
// Logic: Use the array .filter() method to create a new array containing ONLY users who are older than 18 AND isActive is true.

const users = [
  {
    name: "Barry Allen",
    age: 28,
    isActive: true,
  },
  {
    name: "Peter Parker",
    age: 28,
    isActive: true,
  },
  {
    name: "Tony Stark",
    age: 45,
    isActive: false,
  },
  {
    name: "May Parker",
    age: 52,
    isActive: false,
  },
  {
    name: "Eric James",
    age: 12,
    isActive: true,
  },
  {
    name: "John Carter",
    age: 34,
    isActive: true,
  },
  {
    name: "Sarah Williams",
    age: 25,
    isActive: true,
  },
  {
    name: "Michael Brown",
    age: 41,
    isActive: false,
  },
  {
    name: "Noah Adams",
    age: 15,
    isActive: true,
  },
  {
    name: "Liam Scott",
    age: 17,
    isActive: false,
  },
  {
    name: "Olivia Green",
    age: 14,
    isActive: true,
  },
  {
    name: "Daniel White",
    age: 16,
    isActive: true,
  },
  {
    name: "James Miller",
    age: 29,
    isActive: true,
  },
  {
    name: "Grace Taylor",
    age: 38,
    isActive: false,
  },
  {
    name: "Henry Moore",
    age: 24,
    isActive: true,
  },
];

const activeUsers = users.filter((u) => {
  return u.age > 18 && u.isActive === true;
});

console.log(activeUsers);

// 19. The Cart Total (reduce)
// Task: Create an array of numbers representing the prices of items in a user's shopping cart: [1500, 3000, 450, 8000].
// Logic: Use the array .reduce() method to calculate the total sum of all items.

const cart = [
  {
    item: "T-shirt",
    price: 1500,
  },
  {
    item: "Cap",
    price: 3000,
  },
  {
    item: "Socks",
    price: 450,
  },
  {
    item: "Sneakers",
    price: 8000,
  },
  {
    item: "Jeans",
    price: 2500,
  },
  {
    item: "Jacket",
    price: 12000,
  },
];

const total = cart.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(total);

// 20. The Authenticator (find and some)
// Task: Create an array of user objects containing id, email, and role.
// Logic:
// Use .find() to locate the exact user object where the id equals 3.
// Use .some() to check if the array contains any user with the role of "admin" (returns true/false).

const user = [
  { id: 0, email: "user0@gmail.com", role: "admin" },
  { id: 1, email: "user1@gmail.com", role: "user" },
  { id: 2, email: "user2@gmail.com", role: "admin" },
  { id: 3, email: "user3@gmail.com", role: "user" },
  { id: 4, email: "user4@gmail.com", role: "user" },
  { id: 5, email: "user5@gmail.com", role: "admin" },
  { id: 6, email: "user6@gmail.com", role: "user" },
  { id: 7, email: "user7@gmail.com", role: "admin" },
  { id: 8, email: "user8@gmail.com", role: "user" },
  { id: 9, email: "user9@gmail.com", role: "admin" },
  { id: 10, email: "user10@gmail.com", role: "user" },
];

const foundUser = user.find((u) => u.id === 3);
console.log(foundUser);

const hasAdmin = user.some((u) => u.role === "admin");
console.log(hasAdmin);

// 21. The Pipeline (Chaining Array Methods)
// Task: Start with an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Logic: Chain methods together in a single statement:
// filter out the odd numbers.
// map the remaining even numbers by multiplying them by 10.
// reduce the mapped numbers into a single sum.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chainResult = number
  .filter((num) => num % 2 === 0)
  .map((num) => num * 10)
  .reduce((sum, num) => sum + num, 0);

console.log(chainResult);
