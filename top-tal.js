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

// console.log("foo1 returns:");
// console.log(foo1()); // { bar: hello }
// console.log("foo2 returns:");
// console.log(foo2()); //undefined
//enter radi kao kraj statementa

var length = 10;
var g = this;
function fn() {
	console.log(5);
}

var obj = {
  length: 5,
  method: function(x) {
    var a = x.bind(g);
    a();
    arguments[0]();
  }
};

//obj.method(fn, 1);


fn ();

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

b++
var b = 5