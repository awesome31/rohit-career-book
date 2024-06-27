/**
 * Module system is important to understand in JS. There are different ways to import and export modules in JS.
 */

/**
 * CommonJS:
 * 1. Modules are loaded synchronously, typically on the server side.
 * 2. uses require for imports and module.export for exports.
 * 3. Requires bundling and transpiling to use in the browser. Very common in NodeJS env.
 *
 * const module = require('module');
 * module.exports = value;
 */

/**
 * AMD (Asynchronous Module Definition):
 * 1. Modules and their dependencies are loaded asynchronously.
 * 2. Modules can be loaded at run time when they are required.
 * 3. Uses define for defining a module and require for importing. Mostly used in the browser.
 */

/**
 * UMD (Universal Module Definition):
 * 1. Works with both client side and server side.
 * 2. Ideal fir libraries intended to work in both environments.
 */

/**
 * ESM (ECMAScript Modules):
 * 1. Standardized module system in ES6.
 * 2. Uses import and export keywords.
 * 3. Can be used in the browser with type="module" attribute.
 * 4. Can be used in NodeJS with .mjs extension or by setting "type": "module" in package.json.
 * 5. Allows for tree shaking, static analysis and more efficient bundling.
 */

/**
 * Things to remember:
 * 1. import statements get hoisted to the top of the file.
 * 2. IF we have a top level await keyword, then the module loading is deferred until the promise is resolved.
 * 3. import statements are sync where import functions are async.
 */

function getRohit() {
  if (true) {
  }
}

getRohit();
