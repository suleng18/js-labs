// array-count-04
// P1: add unique numbers to a new array --> length
// P2: using object map --> keys of object

// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   const uniqueNumberList = [];

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number);
//   }

//   return uniqueNumberList.length;
// }

// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   const flag = {};

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     flag[number] = true;
//   }

//   return Object.keys(flag).length;
// }

export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const flagNumber = numberList.reduce((flag, number) => {
    flag[number] = true;
    return flag;
  }, {});

  return Object.keys(flagNumber).length;
}
