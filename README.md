# Katha.js

Katha.js is a modern functional programming utility library for JavaScript. It offers a suite of tools to enhance the functional programming paradigm in JavaScript applications, making code more concise, readable, and maintainable.

## Why Use Katha.js?

Katha.js simplifies common functional programming tasks in JavaScript, providing powerful utilities like function composition, currying, and more. It's designed to improve the developer experience by offering intuitive and easy-to-use functional constructs.

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

- **compose**: Combine multiple functions into a single function.
- **curry**: Transform a multi-argument function into a sequence of nested unary functions.
- **pipe**: Create a pipeline of functions, where the output of one function is the input to the next.
- **mapObject**: Apply a transformation function to each value of an object.
- **filterObject**: Filter an object's properties based on a predicate function.
- **either**: Choose between two functions based on the input.
- **foldObject**: Reduce an object's key-value pairs to a single value.

## Contributing

Contributions to Katha.js are welcome! Please read our contribution guidelines for details on how to contribute to the project.

## Reporting Issues

If you encounter any issues or bugs while using Katha.js, please report them in our [issues tracker](https://github.com/Dorky-Robot/katha.js/issues).

## License

Katha.js is licensed under the ISC license. See the LICENSE file for more details.
