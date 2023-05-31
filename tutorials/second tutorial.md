_[Indice sintaxis de markdown](https://markdown.es/sintaxis-markdown/)_  
_[templates](https://clenemt.github.io/docdash/)_  
_[api](https://www.npmjs.com/package/jsdoc-http-plugin)_  

_C:\Ejemplos\MyProject_jdocs_

## @tutorial _nombreTutorial_: 
> Para enlazar desde un módulo con un tutorial.
S
## Detalle de los ejemplos:

### age: 
>_@type {array}_: Arreglo genérico, se puede asignar cualquier tido de dato.  

### scores:
>_@type {array\<Number>}_: Arreglo específico de números  

### scoresAndString:
>_@type {array\<Number | string>}_: Arreglo que admite número o cadenas

### fullname:
>_@type {string}_: Define una variable de tipo cadena

### person:
>_@type {{id: number, firstName: string, lastName: string, age: number}}_: Define una variable tipo objeto

### person2:
>_@type {{id: number | string, firstName: string, lastName: string, age: number | string}}_: Define una variable tipo objeto con datos opcionales

# modules  
## MyMath
> Crea un módulo para agrupar funciones
~~~js
/**
 * My Math library
 * @module MyMath
 */
~~~
# functions  
### add, addTwo, substract:
> Define una función  
~~~js
 * Add two numbers
 * @param {number} n1 First number
 * @param {number} n2 second number
 * @returns {number} result
 */
~~~


# Classes  
## Programer

> Crea una clase y su método
~~~js
/**
 * Class to create a Programer
 * @example
 * const newProgramer = new Programer({objeto}, language)
 * newProgramer.getInfo()
 * @see https://jsdoc.app/tags-class.html#examples
 * 
 * @todo para colocar tareas pendientes 
 */
~~~
~~~js
    /**
     * 
     * @param {{}} user User's Information, en el ejemplo utilizamos un objeto creado anteriormente  
     * @param {string} language A programing Language 
     */
~~~
## Metodo: getInfo
~~~js
    /**
     * Get Programer a Information
     * @returns {void}
     */
~~~




