function x() {
  var a = 7;
  function y() {
    console.log(a);  //y() will remember refrence to value of a. ie., LE of its outer function.
  }
  return y;
}
var z = x();
a = 8;
console.log(a);
console.log(z);
z();
// closure is used to make elements private.