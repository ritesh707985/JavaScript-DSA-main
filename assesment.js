// (function() {
//     var a = b = 5;
//   })();
  
//   console.log(b);



let racer1 = function() {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
  }
  racer1();

  /* write your SQL query below */

//SELECT * FROM maintable_OQSSX WHERE   length(LastName) =5 AND  FirstName like "%e%" 