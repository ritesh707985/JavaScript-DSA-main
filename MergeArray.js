let arr1=[10,20,30,40]
    let arr2=[50,60]
    // let array= [...arr1,...arr2]
    // document.write(array)
    // merge array1 and array2
   console.log(arr1.concat(arr2))
    let array=[]
    for (let i = 0; i < arr1.length; i++) {
         array[i] = arr1[i];
        
    }
    for (let i = 0; i < arr2.length; i++) {
        array[arr1.length+i]= arr2[i];
        
    }
    console.log(array)