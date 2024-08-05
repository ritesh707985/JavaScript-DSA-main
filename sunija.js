
/* Checking sum zero
// [-5,-4,-3,-2,0,2,4,6,8] */

function getSumpairzero(arr){
for(let i=0; i<arr.length; i++){
    console.log('outer loop')
    for(let j=1;j<arr.length;j++){
        console.log('inner loop')
        if(arr[i] + arr[j] == 0){
            return [arr[i], arr[j]]
        }
    }
}

}

console.log(getSumpairzero([-5,-4,-3,-2,0,2,4,6,8]))

// O(n^2)  Quadratic time complexity


/* M - 2  O(n)* Linear time complexity */


function findSum(arr){
    let left = 0
    let right = arr.length -1
    while(left < right){
        sum = arr[left] + arr[right]

        if(sum == 0){
            return [arr[left] ,arr [right]]
        }else if(sum >0){
            right --

        }else{
            left ++
        }
    }
}


console.log(findSum([-5,-4,-3,-2,0,2,4,6,8]))
