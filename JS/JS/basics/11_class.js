console.log("CLasses");

class Student {
  name;
  age;
  id;

  constructor(name, _age, id) {
    // Object emepty

    this.age = _age;
    this.name = name;
    this.id = id;
  }
}

const student1 = new Student("Virendra", 24, 1);
const student2 = new Student("HArsh", 25, 2);
const student3 = new Student("Jatin", 22, 3);

console.log(student1, student2, student3);

student1.age = student1.age + 1;

console.log(student1);

console.clear();

class Car {
  color;
  brandName;

  constructor(color, brandName) {
    //  { color : undefined , brandNAme : undefined }
    this.color = color;
    this.brandName = brandName;
  }

  start() {
    console.log(this.brandName, " is Starting of ", this.color);
  }
}

const tata = new Car("Red", "Tata");
const tesla = new Car("Black", "Tesla");

console.log(tata, tesla);
tata.start();
tesla.start();

class user {
  constructor(id, password) {
    this.id = id;
    this.password = password;
  }
  info() {
    console.log(this.id, "And", this.password);
  }
}

const person = new user("S2025", "asaaaaaaaa");

console.log(person);

person.info();
