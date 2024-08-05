function flatenarray(arr,depth){
    let data =[]
    for(let i=0; i<arr.length;i++){

        if(Array.isArray(arr[i])){
            data=data.concat(flatenarray(arr[i],depth-1))
        }else{
            data.push(arr[i])
        }
        
    }

   return data
}

console.log(flatenarray([10, [50, 31, [44, 81, 73, 0, 63, [17, 29, 37, 78]]]],1));