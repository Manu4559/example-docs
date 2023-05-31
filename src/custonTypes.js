import Programer from "./classes.js"
/**
 * My persons Library
 * @module MyPerson
 */
/**
 * @typedef {object} User
 * @property {number} id User Id
 * @property {string} name User's Name
 * @property {number | string} [age] User's age (optional)
 * @property {boolean} isActive User state
 */

/**
 * @type User
 */
 const myNewUser = {
    id: 1,
    name: 'rayn',
    age: 30,
    isActive: true
}

/**
 * @type User
 */
 const myNewUser2 = {
    id: 2,
    name: 'Joe',
    age: 30,
    isActive: false
}

/**
 * know more a {@link Programer}
 */
const programerOne = new Programer(myNewUser, 'JavaScript')
const programerTwo = new Programer(myNewUser2, 'go')

programerOne.getInfo()
programerTwo.getInfo()


