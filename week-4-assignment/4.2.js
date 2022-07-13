function Person() {

}

Person.prototype.initializer = function(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher() {
  
}

Teacher.prototype.teach = function(subject) {
  return `${this.name} is now teaching ${subject}`
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const him = new Teacher();

him.initializer("harish", 24);
console.log(him.teach("english"))