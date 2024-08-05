const arr =[2,5,2,3,2]
//const remove_duplicate= [...new Set(arr)]

function sumarr(arr){
   let totalNumber = 0;
 
  for(let i =0; i< arr.length; i++){
    totalNumber+=arr[i]
}
 console.log(totalNumber)  
}
sumarr(arr)


/* 
let sum = arr.reduce((acc,cur)=>acc+cur) */
