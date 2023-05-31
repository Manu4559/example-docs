/**
 *  * My Math library
 * @module MyMath
 */

/**
 * Add two numbers
 * @param {number} n1 First number
 * @param {number} n2 second number
 * @returns {number} result
 */
function add(n1, n2) {
    return n1 + n2
}

/**
 * Add two number and returns a result in string
 * @param {number} n1 first number
 * @param {number} n2 second number
 * @returns result    
 */
const addTwo = (n1, n2) => `The result is: ${n1 + n2}`

/**
 * substract two numbers
 * @param {number} n1 
 * @param {number} n2 
 * @returns result
 */
const substract = (n1, n2) => `The result is: ${n1 - n2}`

export default {
    add,
    addTwo,
    substract
}