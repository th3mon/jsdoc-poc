/** @type {string} */
let myString = "Hello World!";

/** @type {number} */
let myNumber = 42;

/** @type {boolean} */
let myBoolean = true;

/** @type {number[]} */
let myArray = [1, 2, 3];

/** @type {{a: string, b: number}} */
let myObject = { a: "Hello", b: 42 };

/**
 * @typedef {Object} Point
 * @property {number} x - The x-coordinate of the point.
 * @property {number} y - The y-coordinate of the point.
 */

/** @type {Point} */
let myPoint = { x: 1, y: 2 };

/**
 * @typedef {Object} BlogPost
 * @property {string} title
 * @property {string} author
 * @property {string} content
 * @property {Date} datePublished
 */

/** @type {BlogPost} */
let myBlogPost = {
  title: "Hello World!",
  author: "<NAME>",
  content: "This is a blog post.",
  datePublished: new Date(),
};

/** @type {string|number} */
let myStringOrNumber = "a string or a number";

/** @typedef {(string|number)} StringOrNumber */

/** @type {StringOrNumber} */
let myStringOrNumber2 = "a string or a number";

/**
 * @param {string} param1 - A string parameter.
 * @param {number} [param2] - An optional number parameter.
 * @returns {string}
 */
function myFunction(param1, param2) {
  return param1 + (param2 || "");
}

/**
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

const sum = add("1", 3);

/**
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The sum of all the numbers in the array.
 */
function sumArray(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

const sum2 = sumArray([1, 2, "3"].map(String));

/**
 * @type {(price: number, isOnSale: boolean) => number})}
 */
const calculateTotalPrice = (price, isOnSale) => {
  const tax = 0.07;
  let discount = 0;

  if (isOnSale) {
    discount = 0.1;
  }

  return (price - price * discount) * (1 + tax);
};
