let student = {
  name: "Virendra",
  DOB: "06-03-1998",
  age: 29,
  run: function (speed) {
    console.log(this.name + " is running at speed", speed);
  },

  stop: function () {
    console.log("Student stopped");
  },
};

let student2 = {
  name: "Jatin",
  run: function () {
    console.log(this.name + " is running");
  },
};

student.run(10);
student2.run();

let person = {
  name: "Sanskar Sahu",
  age: 20,
  canDO: function (lang1st, lang2nd) {
    console.log("a person can speak" + " " + lang1st + " " + lang2nd);
  },
};
me.canDO("hindi", "english");
