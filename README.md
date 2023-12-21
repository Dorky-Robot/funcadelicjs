# Katha.js

Katha.js is a modern functional programming utility library for JavaScript. It offers a suite of tools to enhance the functional programming paradigm in JavaScript applications, making code more concise, readable, and maintainable.

## Why Use Katha.js?

Katha.js simplifies common functional programming tasks in JavaScript, providing powerful utilities like function composition, currying, and more. It's designed to improve the developer experience by offering intuitive and easy-to-use functional constructs.

With Katha:

```javascript
const processObject = katha.pipe(
  katha.mapObject((x) => x + 1), // Increment each value in the object
  katha.filterObject((x) => x % 2 === 0), // Keep only even values
  katha.foldObject((acc, x) => acc + x, 0) // Sum the values
);

const data = { a: 1, b: 2, c: 3 };
console.log(processObject(data)); // Outputs: 6 (After increment: {a: 2, b: 3, c: 4}, then {a: 2, c: 4}, sum is 6)
```

Without:

```javascript
function processObject(data) {
  // Increment each value in the object
  let incrementedValues = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      incrementedValues[key] = data[key] + 1;
    }
  }

  // Keep only even values
  let evenValues = {};
  for (const key in incrementedValues) {
    if (
      incrementedValues.hasOwnProperty(key) &&
      incrementedValues[key] % 2 === 0
    ) {
      evenValues[key] = incrementedValues[key];
    }
  }

  // Sum the values
  let sum = 0;
  for (const key in evenValues) {
    if (evenValues.hasOwnProperty(key)) {
      sum += evenValues[key];
    }
  }

  return sum;
}

const data = { a: 1, b: 2, c: 3 };
console.log(processObject(data)); // Outputs: 6
```

## Getting Started

Include Katha.js in your project to start using its functional utilities.

### Installation

To install Katha.js, run the following command in your project directory:

```
npm install katha.js
```

### Usage

Import the functions you need from Katha.js:

```javascript
import { compose, curry, pipe } from "katha.js";

// Example usage
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(2, 3, 2)); // Outputs: 10
```

## Features

Katha.js includes a variety of functional programming utilities:

### Compose

```javascript
const addOne = (x) => x + 1;
const square = (x) => x * x;
const addOneThenSquare = katha.compose(square, addOne);
console.log(addOneThenSquare(4)); // Outputs: 25
```

### Curry

```javascript
const add = (a, b) => a + b;
const curriedAdd = katha.curry(add);
console.log(curriedAdd(2)(3)); // Outputs: 5
```

### Pipe

```javascript
const double = (x) => x * 2;
const subtractTwo = (x) => x - 2;
const doubleThenSubtractTwo = katha.pipe(double, subtractTwo);
console.log(doubleThenSubtractTwo(5)); // Outputs: 8
```

### MapObject

```javascript
const object = { a: 1, b: 2 };
const doubledValues = katha.mapObject((x) => x * 2)(object);
console.log(doubledValues); // Outputs: { a: 2, b: 4 }
```

### FilterObject

```javascript
const isEven = (x) => x % 2 === 0;
const filteredObject = katha.filterObject(isEven)(object);
console.log(filteredObject); // Outputs: { b: 2 }
```

### Either

```javascript
const eitherAddOrDouble = katha.either(() => 0, double);
console.log(eitherAddOrDouble(null)); // Outputs: 0
console.log(eitherAddOrDouble(5)); // Outputs: 10
```

### FoldObject

```javascript
const sumValues = katha.foldObject((acc, x) => acc + x, 0);
console.log(sumValues(object)); // Outputs: 3
```

## Elegant Harmonious Composition Example

Let's create a function that combines these features in a meaningful way. For example, we can create a function that processes an object of numeric values, applying a series of transformations and calculations:

```javascript
const processObject = katha.pipe(
  katha.mapObject((x) => x + 1), // Increment each value in the object
  katha.filterObject((x) => x % 2 === 0), // Keep only even values
  katha.foldObject((acc, x) => acc + x, 0) // Sum the values
);

const data = { a: 1, b: 2, c: 3 };
console.log(processObject(data)); // Outputs: 6 (After increment: {a: 2, b: 3, c: 4}, then {a: 2, c: 4}, sum is 6)
```

In this example, `processObject` is a composition of several functional utilities provided by Katha.js. It demonstrates how you can elegantly chain together transformations and calculations in a clear, functional style. This approach encapsulates complex operations in a readable and maintainable way, showcasing the power and elegance of functional programming in JavaScript.

## Contributing

Contributions to Katha.js are welcome! Please read our contribution guidelines for details on how to contribute to the project.

## Reporting Issues

If you encounter any issues or bugs while using Katha.js, please report them in our [issues tracker](https://github.com/Dorky-Robot/katha.js/issues).

## License

Katha.js is licensed under the ISC license. See the LICENSE file for more details.
