function isEqual(obj1, obj2) {
   if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

   for (const key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
   }

   return true;
}
console.log(isEqual(1, 2));
console.log(isEqual({ name: 'Long' }, { name: 'Hai' }));
console.log(isEqual({ name: 'Long' }, { name: 'Long' }));
console.log(isEqual({ name: 'Long' }, { name: 'Hai', age: 18 }));

//v2
function isEqual(obj1, obj2) {
   if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return -1;

   const length1 = Object.keys(obj1).length;
   const length2 = Object.keys(obj2).length;

   let value1;
   let value2;

   for (const key1 in obj1) {
      value1 = obj1[key1];
   }
   for (const key2 in obj2) {
      value2 = obj2[key2];
   }
   return length1 === length2 && value1 === value2;
}
console.log(isEqual(1, 2));
console.log(isEqual({ name: 'Long' }, { name: 'Hai' }));
console.log(isEqual({ name: 'Long' }, { name: 'Long' }));
console.log(isEqual({ name: 'Long' }, { name: 'Hai', age: 18 }));
