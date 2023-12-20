import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "katha.js", // Your entry point
  output: [
    {
      file: "dist/katha.bundle.js", // Unminified output file
      format: "umd", // Universal Module Definition
      name: "katha", // Name of your package
      esModule: false,
    },
    {
      file: "dist/katha.bundle.min.js", // Minified output file
      format: "umd", // Universal Module Definition
      name: "katha", // Name of your package
      esModule: false,
      plugins: [terser()], // Minifies the bundle
    },
  ],
  plugins: [
    resolve(), // Locates modules using the Node resolution algorithm
    commonjs(), // Converts CommonJS modules to ES6
  ],
};
