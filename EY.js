/* Pair of elements from a specified array whose sum equals a specific target number */


function findPairWithSum (arr){
    const pairs = []
    for(let i =0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==8){
                pairs.push([arr[i],arr[j]])
                
            }
        }
    }
    
    return pairs
}

console.log(findPairWithSum ([1,2,3,4,5,6,7,0,8,5,4,3,1]))

let twoSum = (array, sum) => {
    let hashMap = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
                results.push([hashMap[array[i]], array[i]])
            }else{
                hashMap[sum - array[i]] = array[i];
            }
          }
          return results;
    }
    
    let arr = [1,2,3,4,5,6,7,0,8,5,4,3,1]
console.log(twoSum(arr,8));