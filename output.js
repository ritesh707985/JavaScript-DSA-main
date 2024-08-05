/*1*/

// function fruit(){

//     console.log(name)
//     console.log(price)
//     var name="apple"
//     const price=10

// }
// fruit() // undefined
        // ReferenceError: Cannot access 'price' before initialization
/**Using a let variable before it is declared will result in a ReferenceError.
carName = "Volvo";
let carName;
This will result in a ReferenceError:
let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.
To avoid hoisting we use const and let instead of var.
 */

/**2 */

// for(var i=0;  i<3; i++){
//     setTimeout(()=>console.log(i),1)
// }

// 3 3 3  /****coz var is global scope i=3 it give same value***/


/**2 */

// for(let i=0;  i<3; i++){
//     setTimeout(()=>console.log(i),1)
// } 

// 0 1 2  /**** coz let has block scope it give different value ***/

/*3 */
//console.log(+true) // O/p   1

/**whenever putting + before string value or boolean value it will converted to the numeric value*/

/*4*/
// console.log(typeof(+true)) // O/p   number

/*5*/
// console.log(! "anul") //  false
 /***Oppositeof string is false **/
// console.log(typeof "anul")

// var a=10
// var a = 20
// console.log(a)

/* 6*/

// let number = 0
// console.log(number++) // 0     and number = 1
// console.log(++number) //2
// console.log(number)//2

/* 7*/
// How long it accessable in browser
// sessionStorage.setItem('cool_secret', 123)

/** session storage remove the storage whenever we close the browser */


/* 8 */

// const person ={name:'Lydia'}

// function sayHi(age){
//     return `${this.name} is ${age}`
// }

// console.log(sayHi.call(person,21))
// console.log(sayHi.bind(person,21))
// O/P    
//Lydia is 21
// [Function: bound sayHi]  in bind function we need to call function like console.log(sayHi.bind(person,21)())


/* 9*/

//console.log([]==[])  // false   both array have diffrent memory allocation



