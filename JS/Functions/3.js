const privateVariable = "I am private";

function scopeUndersatnding() {
  //   console.log(privateVariable); // Invalid

  console.log(scopeUndersatnding.name);
  const privateVariable = "I am private";
  console.log(privateVariable); // valid
}

scopeUndersatnding();

// console.log(privateVariable); // out of scope variable
