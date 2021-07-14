const john = {
    name: 'John',
    age: 24,
  };
  const jane = {
    name: 'Jane',
    age: 22,
  };

  function greeting() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }




const greetingname = greeting.bind(john);
// Hi, I am John and I am 24 years old
greetingname();
const greetingJane = greeting.bind(jane);
// Hi, I am Jane and I am 22 years old
greetingJane();