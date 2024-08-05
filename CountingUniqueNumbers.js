let uniqueNo = (arr) => {
    let counter = {}
    for (let items of arr){
      //console.log(items)
    counter[items] = (counter[items] || 0) + 1
    }
     // console.log(counter)
      return Object.keys(counter).length;
  }
  
  let number = uniqueNo([1,1,2,2,3,4,4,5,6,7,8,8])
  console.log(number)