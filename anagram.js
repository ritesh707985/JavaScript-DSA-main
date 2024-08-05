function anagram(str1,str2){
   
    len1=str1.length    
    len2=str2.length
    
    if(len1 != len2){
        return false
    }
    
      revStr1= str1.split('').sort().join('')
      revStr2= str2.split('').sort().join('')
   if(revStr1 == revStr2){
       return true
   }
   
}

console.log(anagram('listen','silent'))


/* M2*/
function checkanagram(str1,str2){
    const len1 = str1.length
    const len2= str2.length
    if(len1!=len2){
        return false
    }
    let count =  {}
    for(number of str1){
       count[number] = (count[number] || 0) + 1
    }
    
    for(items of str2){
        if(!count[items]){
            return false
        }
        count[items]-= 1
    }
    return true 
 }
 
 
 console.log(checkanagram('hello','llohe'))