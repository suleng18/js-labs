//Duyệt keys của object
const student = {
   id: 1,
   name: 'Xuan Long',
   isHero: true,
};

for (let key in student) {
   console.log('key:', key);
   console.log('value:', student[key]);
}
