/* Extract unique values from an array  */

const arr = [1,1,2,2,3,4,4,5];
const extractUnique = arr => {
   const res = [];
   for(let i = 0; i < arr.length; i++){
// console.log(arr.lastIndexOf(1), "****", arr.indexOf(1))
//console.log(arr.lastIndexOf(arr[i]), "****", arr.indexOf(arr[i]))
      if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])){
         continue;
      };
     res.push(arr[i]);
   };
   return res;
};
console.log(extractUnique(arr));

/* O:P  [ 3, 5 ]  */