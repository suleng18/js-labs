const studentA = { name: 'Long', math: 9 };
const studentB = cloneObject(studentA);

function cloneObject(obj) {
   // your code here
   const cloneObj = {};

   for (const key in obj) {
      cloneObj[key] = obj[key];
   }
   return cloneObj;
}
console.log(studentA);
console.log(studentB);
console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentB.math);