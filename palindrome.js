let input = "a car a man a maraca";
let str = input.split(' ').join('');
let reversedStr = reverse(str);

function reverse(s){
    return s.split("").reverse().join("");
}

console.log(str === reversedStr);