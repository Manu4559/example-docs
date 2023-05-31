// @ts-nocheck
/**
 * Class to create a Programer
 * @example
 * const newProgramer = new Programer({objeto}, language)
 * newProgramer.getInfo()
 * @see https://jsdoc.app/tags-class.html#examples
 * 
 * @todo para colocar tareas pendientes 
 */
class Programer {

    /**
     * 
     * @param {User} user User's Information  
     * @param {string} language A programing Language 
     */
    constructor(user, language) {
        this.name = user.name
        this.language = language
    }

    /**
     * Get Programer a Information
     * @returns {void}
     */
    getInfo() {
        console.log(`I'm ${this.name} and my favorite programing language is ${this.language}`)
    }
}

export default Programer