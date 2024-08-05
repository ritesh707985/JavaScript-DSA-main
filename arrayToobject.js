const array = [
    { key: "key1", value: "value1" },
    { key: "key2", value: "value2" },
];

const obj = Object.fromEntries(array.map((item) => {
    return [item.key, item.value]
}));

console.log(obj);

let arr = [1, 2, 3, 4];
 
// Using Object.assign to create
// new object from array
let objec = Object.assign({}, arr);
 
// Display output
console.log(objec);
