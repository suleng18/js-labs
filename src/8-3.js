//Clone Object
const student = {
   name: 'Xuan Long',
   age: 22,
};

const moreProps = {
   isHero: true,
   gender: 'male',
};

const clonedStudent = Object.assign({}, student, moreProps); //v1

const clonedStudent2 = {
   //v2
   ...student,
   ...moreProps,
};
console.log(clonedStudent);
console.log(clonedStudent2);

//Deep clone object
const student1 = {
   name: 'Easy Frontend',
   age: 18,

   mark: {
      math: 10,
      english: 7,
   },
};
const clonedStudent1 = {
   ...student1,
   mark: {
      ...student1.mark,
   },
};
clonedStudent1.mark.math = 1;
console.log(student1.mark.math); // 10 works now
