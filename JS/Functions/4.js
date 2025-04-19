let outside = "101";

function fun() {
  outside = 102;
  console.log(outside);
}

console.log(outside);
fun();
console.log(outside);

let a = 0;

console.log(a);
{
  let a = 10;
  console.log(a);

  a = 90;
  {
    let a = 20;
    console.log(a);
    a = 91;
  }
}
console.log(a);
