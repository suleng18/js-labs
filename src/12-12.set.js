function uniqueNumber(numberList) {
   if (!Array.isArray(numberList || numberList.length)) return [];

   const uniqueNumberSet = new Set(numberList);
   return Array.from(uniqueNumberSet);
   // return [...uniqueNumberSet];
}
console.log(uniqueNumber([1, 1, 2, 2, 2, 3, 3]));

function uniqueLetter(str) {
   if (str.length === 0) return '';

   const uniqueLetterSet = new Set(str);
   return [...uniqueLetterSet].join('');
}
console.log(uniqueLetter('abcabcacb'));

function getIntersectionSet(set1, set2) {
   const intersectionSet = new Set();

   for (const item of set1) {
      if (set2.has(item)) intersectionSet.add(item);
   }

   return intersectionSet;
}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 5, 4]);
console.log(getIntersectionSet(set1, set2));
