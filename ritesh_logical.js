// reverse of string 
var str = "Hello Ritesh"
var revStr=''
for (let index = str.length -1; index >=0; index --) {
    revStr = revStr +  str[index]
    
}
//console.log(revStr)

//2. find duplicate element in array
var arr= [2,4,5,6,3,3,4,1,1,5]
var dupNum = []
for (i = 0 ; i<arr.length;i++){
    for(j= i+1 ;j<arr.length;j++){
        if(arr[i] == arr[j]){
         dupNum.push(arr[j])
        }       
    }
}

//console.log(dupNum)

// 5. remove duplicate element in array
method=>a
var arr = [2,5,1,0,1,2,2,0,2,5]
 let newArr=[]
index = 0
arr.map((val)=>{
  if(!newArr.includes(val)){
    newArr[index] = val
    index++
  }
})
//console.log(newArr)

method=>b
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr)

method=>c
for (i = 0 ; i<arr.length;i++){
     if (newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
     }
}
 console.log(newArr)  

// 3. short array

const empl= [{"age":45},{"age":5},{"age":50},{"age":4},]
for(i=0;i<empl.length;i++){
    for(j=0 ;j<empl.length-i-1;j++){
        if(empl[j].age > empl[j+1].age){
            const temp = empl[j]
            empl[j]=empl[j+1]
            empl[j+1]=temp
        }
       
    }
}
//console.log(empl)

// 3.find max number in an array 
const array = [18,45,23,0,3]
var maxnum =[]
for(i=0;i<array.length;i++){       
            if(array[i] > maxnum){
                maxnum= array[i]               
           }       
}
//console.log(maxnum) output 45

// 4. find min value 

const arr1 = [8, 89, 67, 20, 7, 23];
var minNum = arr1[0]; 
for (var i = 1; i < arr1.length; i++) {
  if (arr1[i] < minNum) {
    minNum = arr1[i];
  }
}

//console.log(minNum); // output 7

// acending order of array
const acdArr = [12, 2, 34, 65, 0, 9];

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(acdArr);

//console.log(acdArr); // Output: [0, 2, 9, 12, 34, 65]

// find duplicate character in a string 
function findDuplicateCharacters(str) {
    const charArray = [];
    const duplicates = [];
    // Convert the string into an array of characters
    for (let i = 0; i < str.length; i++) {
      charArray.push(str[i]);
    }
  
    // Manual sorting of the character array (using bubble sort)
    for (let i = 0; i < charArray.length - 1; i++) {
      for (let j = 0; j < charArray.length - i - 1; j++) {
        if (charArray[j] > charArray[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = charArray[j];
          charArray[j] = charArray[j + 1];
          charArray[j + 1] = temp;
        }
      }
    }
  
    // Find duplicate characters
    for (let i = 0; i < charArray.length - 1; i++) {
      if (charArray[i] === charArray[i + 1]) {
        if (!duplicates.includes(charArray[i])) {
          duplicates.push(charArray[i]);
        }
      }
    }
  
    return duplicates;
  }
  
  const inputString = "hello";
  const duplicateChars = findDuplicateCharacters(inputString);
  //console.log("Duplicate characters:", duplicateChars); // Output: ['l']
  

//  7 if input is aaabbbff then outpout is a3b3f2 in js using for loop 

const stR = "aliisasttshharitesht"
var str1= [...stR]
for(i=0;i<str1.length;i++){
    for(j=0;j<str1.length-i-1;j++){
        if(str1[j]>str1[j+1]){
           const temp=str1[j];
            str1[j]=str1[j+1];
            str1[j+1]=temp;
        }
    }
}
 var strR1 = []
let count = 1; 
let char = str1[0];
for (let i = 1; i <= str1.length; i++) {
    if (str1[i] === char) {
        count = count + 1;
    } else {
        strR1.push(char,count); 
        char = str1[i];
        count = 1; 
    }
}
  var str6=''
 for(i=0;i<strR1.length;i++){
     str6+= strR1[i] 
 }
//console.log(str6);


  // 9. arrange character in alphabetical order in string 

const str4 = "riiiteeshalishae"
var strArr=[...str4]
var newStr=''
for(i=0;i<strArr.length;i++){
    for(j=0;j<strArr.length-1;j++){
        if(strArr[j] > strArr[j+1]){
            temp = strArr[j]
            strArr[j]=strArr[j+1]
            strArr[j+1]=temp
        }
    }
}
for(i=0;i<strArr.length;i++){
    newStr=newStr+ strArr[i]
}
//console.log(newStr)

// 9. remove duplicate character from string 
const str5 = "aaaliissttshhharitesh"
var str1= [...str5]
for(i=0;i<str1.length;i++){
    for(j=0;j<str1.length-i-1;j++){
        if(str1[j]>str1[j+1]){
           const temp=str1[j];
            str1[j]=str1[j+1];
            str1[j+1]=temp;
        }
    }
}
let strR=''
for(let i=0;i<str1.length-1;i++){
    if(str1[i]<=str1[i+1]){
        if(strR[strR.length-1] !=str1[i]){
            strR+=str1[i]
        }
    }  
}
//console.log(strR) 

// 10 .palidrome of string
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCas();
  const length = cleanStr.length; 
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (cleanStr[i] !== cleanStr[length - 1 - i]) {
      return false;
    }
  }
  return true;
}
const inputString1 = "madadm";
//console.log(isPalindrome(inputString1));


//12  second largest number   
const arrS = [2,4,6,7,3,9]
ar= arrS.sort((a,b)=>{ return b-a})[1]
//console.log(ar)

  // 2nd way 

  var max =0
  var secondMax=0
  for(i=0;i<arrS.length;i++){
    if(arrS[i] > max){
      secondMax = max
      max = arrS[i]
    }else if(arrS[i] > secondMax){
      secondMax = arrS[i]
    }
  }

  //console.log(secondMax)

// 13. second minmum 

  const arrM = [2,4,6,7,3,9]
  arS1= arrM.sort((a,b)=>{return b-a})[arrM.length-2]
 //console.log(arS1)

//  2nd way 
let min = arrM[0];
let secondMin=arrM[0]
for(i=0;i<arrM.length;i++){
  if(arrM[i] < min ){
    secondMin=min
    min = arrM[i]
  }else if(arrM[i] < secondMin){
    secondMin = arrM[i]
  }
}
//console.log(min,secondMin)

// 14 . find frequency of charchter in array

var StrArr= ["a","d","z","a","a","z"] 
let obj={}
 StrArr.map((value)=>{
  obj[value] ? ++obj[value] : obj[value] =1
 })
 console.log(obj)


//20 .
 function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}
//runFunc();

// 21
let a = 0;
let b = false;
//console.log((a == b));
//console.log((a === b));

// 22.
var x = 23;
(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); 

// 23.
function random(){
  var x; 
  x++; 
  console.log(x); 
  x = 21; 
}
random();

// 24.

  let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  let hero2 = {powerLevel:42};
  console.log(getPower());
  console.log(getPower.apply(hero2));

// 25.
const d = function(){
    console.log(this);
    const b = {
      func1: function(){
        console.log(this);
      }  
    }
    const c = {
      func2: ()=>{
        console.log(this);
      }
    }
    b.func1();
    c.func2();
  }
  d();
  
  // 26.

const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  b.f();
  
// Code 1

// 27.
(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);

// 28.

function bigFunc(element){
  let newArray = new Array(700).fill('â™¥');
  return newArray[element];
}

//console.log(bigFunc(599)); // Array is created
//console.log(bigFunc(670)); // Array is created again

// Code 29

function randomFunc(){
  for(var i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}
//randomFunc();

// 30.

function bigFunc(){
  let newArray = new Array(700).fill('â™¥');
  return (element) => newArray[element];
}

let getElement = bigFunc(); // Array is created only once
getElement(599);
getElement(670);  

// 31.

function randomFunc(){
  for(let i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}
//randomFunc(); 


// 32.

function randomFunc(){
  for(var i = 0; i < 2; i++){
  (function(i){
      setTimeout(()=>console.log(i),1000);
    })(i);
  }
}
randomFunc();

// 33.

function rotateRight(arr,rotations){
  if(rotations == 0) return arr;
  for(let i = 0; i < rotations;i++){
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
rotateRight([2, 3, 4, 5, 7], 3); 

// 34.

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
rotateRight([44, 1, 22, 111], 5); 

// 35

function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  const y = 12;
}
//func1();

// 36.
function func2(){
  for(var i = 0; i < 3; i++){
      console.log(i)
    setTimeout(()=> console.log(i));
}
}
//func2();

// 37.

(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();

// 38.

let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
//console.log(x[y]);

// 39.
function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}
runFunc();


// . to find only duplicate value
//a
const duplicates = [];
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (seen[item]) {
      if (seen[item] === 1) {
        duplicates.push(item);
      }
      seen[item]++;
    } else {
      seen[item] = 1;
    }
  }
  console.log(seen)
console.log(duplicates)
//b
count={}
arr1=[]
arr.map((item)=>{
    count[item] ? ++count[item] :count[item]=1
    if(count[item]!==1){
      arr1.push(item)  
    }
})
console.log(arr1)