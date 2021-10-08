//1
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1()); // { bar: hello }
console.log("foo2 returns:");
console.log(foo2()); //undefined
//enter radi kao kraj statementa
