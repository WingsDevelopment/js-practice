function duplicate(arr) {
    return [...arr, ...arr];
  }
  
  const a = duplicate([1, 2]);

  //console.log(a);

function mul(i) {
   return function(j) {
     return function(z) {
       return i * j * z;
     }
   }
}

//console.log(mul(2)(3)(4)); // output : 24

const createBase = (base) => {
  const b = base;
  return function(i) {
    return b + i;
  }
}

var addSix = createBase(6);
//console.log(addSix(10)) // returns 16
//console.log(addSix(21)) // returns 27

// for(let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz")
//   else if (i % 3 === 0) console.log("fizz")
//   else if (i % 5 === 0) console.log("buzz")
//   else console.log(i)
// }

