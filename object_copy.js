let obj = {
    name:"peter"
}


let user = obj
user.name="brush"
console.log(obj)  // brush   /*** jab bhi hm kisi object ko dusre object k ander assign karte hai to data copy nhi hota
                      //  uska refrence copy hota hai    ONLY FOR OBJECT NOT VARIABLE   **** object ko copy karna issi ko bolte hai
/*
obj = some // 1213243534 memory location  when copy the object into user their location is same
let user = obj    isly e jaise hi second wali ki value change karte hai first wali ki bhi value change ho jaegi due to same locatio or adddress memory.

*/

/*********But in case of variable when we copy to uski value copy hoti  na ki memory location********* */

let a="John"
let b=a
b="Deo"

console.log(a)// John




/******* To avoid copy in object */
/****First way *** */
let object = {
    name:"peter"
}


let users = Object.assign({},object)
users.name="brush"
console.log("object value",object) 
console.log("users value",users) // shallow copy

/****Second way *** */
let object1 = {
    name:"peter"
}


let users1 = {...object1}
users1.name="brush"
console.log("object1 value",object1) 
console.log("users1 value",users1) // shallow copy not vaid for nested object case


/*Deep Copy*/

let detail = {
    name:"Peter",
    address:{
        city:"Noida",
        state:"UP"

    }
}

let user_dtl= JSON.parse(JSON.stringify(detail))
user_dtl.address.city="Gurgaon"

console.log("detail",detail)
console.log("user_dtl",user_dtl)  // deep copy will not in the case of function and date
// let detail = {
//     name:"Peter",
//     address:{
//         city:"Noida",
//         state:"UP"

//     },
        // getDeatils:function{

        // }
// }

/****to resolve this we can use loadsh on node****/

let detail1 = {
        name:"Peter",
        address:{
            city:"Noida",
            state:"UP"
    
        },
            getDeatils:function(){
                return "all data"
            }
    }

//     let allData= _.cloneDeep(detail1)/// need to add loadsh library or cdn
//     allData.address.city="Gurgaon"
// console.log("detail1",detail1)
// console.log("allData",allData)



const person = {
    firstName: 'John',
    lastName: 'Doe'
};


// using spread ...
let p1 = {
    ...person
};

// using  Object.assign() method
let p2 = Object.assign({}, person);

// using JSON
let p3 = JSON.parse(JSON.stringify(person));


console.log(p1, " ____", p2, "*****", p3, "++++++")


let array = [1, 2, 3];

array[-1]; // 3, the last element
array[-2]; // 2, one step from the end
array[-3]; // 1, two steps from the end
//***In other words, array[-N] is the same as array[array.length - N].


console.log(3>2>1)   // false     same operator (>), will be evaluated from left to right
true > 1 // false        And true is converted to 1, hence the results.


console.log(1 < 2 < 3);  // true
console.log(3 > 2 > 1);  // false 