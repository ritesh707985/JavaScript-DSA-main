/**nth largest element from an unsorted array. */
console.log([ 100, 200, 200, 9,  9, 200, 600, 400].sort())

function nthlargest(arra,highest){
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        tnum = arra.length, 
        flag = false, 
        result = false; 

    while(x < tnum){
        y = x + 1; 
        
        if(y < tnum){
            for(z = y; z < tnum; z++){
                
                if(arra[x] < arra[z]){
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){ 
              
                result = true;
            }	
        }
        if(result){
            break;
        }
    }

    return (arra[(highest - 1)]);	
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652].sort(), 4)); 