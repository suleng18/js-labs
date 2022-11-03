// export function findAllNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return [];

//   const result = [];

//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];

//     const firstDigit = getFirstDigitNumber(number);
//     if (firstDigit % 2 !== 0) result.push(number);
//   }

//   return result;
// }

function getFirstDigitNumber(number) {
  const unsignedNumber = Math.abs(number);

  //   +unsignedNumber.toString().charAt(0); // string to number
  return Number.parseInt(unsignedNumber.toString().charAt(0));
}

export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((number) => getFirstDigitNumber(number) % 2 !== 0);
}
