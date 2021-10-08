for (var i = 0; i < 5; i++) {
    k = (function (i) {
        return function() { console.log(i); };
      })(i)
}

//k()


let arr = [1,3];
let arr2 = [2,4];
arr.push(arr2);
//console.log(arr.slice(-1));

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);