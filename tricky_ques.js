//1
// let a =[]
// let b =[]


// console.log(a==b) /* comparing memory location and a and b location are different
// console.log(a===b)


//2
// let a =[]
// let b =a

// console.log(a==b) /* b have same array memoryb location (same memory location) */
// console.log(a===b)


//3
// let a =[20]
// let b =[20]

// console.log(a[0]==b[0]) 
// console.log(a[0]===b[0]) /* element value comparing 20*/

//4

// let z = [1,2,3,4]
// let a = {name: "pallavi"}

// console.log(...z) /*1,2,3,4 8/

//5
// console.log(typeof NaN)  // number

//6
// let data = 10 - - 10;
// console.log(data)  // 20

//7

// let set = new Set([1,2,2,1,3])

// console.log(set)  /*Set(3) { 1, 2, 3 }*/

//8
// let data = {name: "pallavi"}

// console.log(delete data.name) /* true */


//9
// let data = {name: "pallavi"}

// console.log(delete data) /* false    property can deleted not data*/

//10
// const data = ["peter","sham","anil"]
// const [y] = data
// const [y,x,z] = data  /* array destructring */
// console.log(y)


//11
// const data = ["peter","sham","anil"]
// const [,y] = data  /*  how to get second element  from array */

// console.log(y)

//12

// const data = {name:"peter", age:56}
// const {name} = data  // how to get property without . operator 

// console.log(name)

//13
// let data = {name:"peter", age:56}
// let info = {city:"noida", email:"pallavik@yopmail.com"}
// console.log({...data, ...info})  /* merege two object*/

//14

// let data = {name:"peter", age:56}
// let info = {city:"noida"}
// console.log({data, ...info}) 

//15
// let name ='pallavi'

// console.log(name()) //TypeError: name is not a function

//16
// const result= false || {} || null
// console.log(result)  /* O/P: {}  if we use OR (||) then it consider first true value and here first true value is {} */

//17
// const result = null || false || ' '

// console.log(result)

//18
// const result = [] || 0 || true

// console.log(result)

//19
// console.log(Promise.resolve(5))  /* Promise {<fulfilled>: 5}  */

//20
// console.log('❤️' == '❤️')  /* true (unicode is same) */

//21

// JSON.parse()     /* A */
// what does this method will do
// A. Parses JSON to a javascript Value
// B. Parses javascript object to JSON
// C. Parses any javascript value to JSON
// D. Parses JSON to a javascript object 

// 22.

// let name = 'pallavi'
// function getName(){
//     console.log(name)
//     let name = 'kumari'
// }

// getName()   /*  ReferenceError: Cannot access 'name' before initialization) let and const cannot be hoisted 

//23
// let name = 'pallavi'
// function getName(){
//     console.log(name)
   
// }

// getName()  /* pallavi  */

// 24 
// console.log((x=>x)('I love'))

// console.log(`${(x => x)('I love')} to program`)


//25 check any value is odd or even

// let a = 30

// console.log(a % 2)  /* if reminder is 0 then even number and 1 then odd number

// let b = 31

// console.log(b % 2)

// console.log(!!null)  console.log(!undefined)  console.log(Boolean(null)) console.log(Boolean(undefined))




for (var i=0;i<5;i++){
 setTimeout(function(){ 
console.log(i);
 }, 1000); 
}

console.log(true+false) 

 console.log(true+false) 


console.log(2+true) 

console.log(-'34'+10) 

var y = 1, x = y = typeof x; 

 let a = []; 
 let b = [];
 console.log(a==b)

 let arr = [1,2,3,4,5] // sum of element with reduce method

 /*  question asked in interview*/


 const obj = {
    name: 'test',
    print: function() {
      console.log('Hi ' + this.name)
    },
    printData: () => {
      console.log('Hi ' + this.name)
    }
   }
    
   obj.print() // Hi test
   obj.printData() // Hi undefined
   
   
   printName() // Bye
   printData(); // error
    
   function printName() {
    console.log("Bye")
   }
    
   const printData = () => {
    console.log('Hi');
   }
   
   
   console.log('Alpha');
    
    setTimeout(() => {
      console.log('Beta');
    }, 0);
    
    Promise.resolve().then(() => console.log('Gamma'));
    
    console.log('Delta');
   
   Alpha 
   Delta
   Gamma
   Beta
   
   console.log(1);
   setTimeout(function () {
    console.log(2);
   }, 0);
    
   Promise.resolve()
    .then(function () {
      console.log(3);
    })
    .then(function () {
      console.log(4);
    });  //1, 3, 4, 2
   
   
   
   const nums = [1,2,3,4,5,6,7];
   nums.forEach((n) => {
       if(n%2 === 0) 
         break;
       console.log(n);
   });  // 
   
   
   
   
   let a = true;
   setTimeout(() => {
     a = false;
   }, 2000)
   
   while(a) {
     console.log(' -- inside whilee -- ');
   }
   
   
   const person = { name: 'Test' };
    
   function sayHi(age) {
    return `${this.name} is ${age}`;
   }
   console.log(sayHi(20));
