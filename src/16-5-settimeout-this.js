const student = {
  name: 'Xuan Long',
  sayHello() {
    console.log('Name', this.name);
    console.log('This', this);
  },
};
student.sayHello();

// no active
setTimeout(student.sayHello);

// work
setTimeout(() => {
  student.sayHello(); // this is student --> 'Xuan Long'
});

setTimeout(student.sayHello.bind(student)); // this is student --> 'Xuan Long'
