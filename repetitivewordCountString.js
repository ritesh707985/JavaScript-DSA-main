const str = "car bus jeep car jeep bus motorbike truck";
const contrepitive= (str)=>{
    const arr = str.split(" ")
    let count = 0;
    for(let i=0;i<arr.length; i++){
        if(i === arr.lastIndexOf(arr[i])){
            continue;
         };
         count++;
      };
      return count;
    }

console.log(contrepitive(str))