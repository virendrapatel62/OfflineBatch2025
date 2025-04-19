let mouse = {};
mouse.color = "black";
mouse.type = "optical";
mouse.button = "right,left";
mouse.tech = "wired";
mouse.object = {};

console.log(mouse);

let second = {
  name: "jatin",
  age: 13,
};

let obj = {
  name: "sanskar",
  age: 20,
  object: [
    "jatin",
    "sanskar",
    {
      1: 2,
      3: 4,
    },
    second,
  ],
};
console.log(obj);
