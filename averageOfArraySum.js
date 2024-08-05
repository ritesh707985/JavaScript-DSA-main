const arr=[3,4,5,6,7]
var sum = 0;

for( var i = 0; i < arr.length; i++ ){
    
    sum +=  arr[i]; //don't forget to add the base    sum=sum+arr[i];
   // sum=sum+arr[i];

}

var avg = sum/arr.length;

console.log( "The sum of all the elements is: " + sum + " The average is: " + avg );