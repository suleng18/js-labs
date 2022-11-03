export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const resultList = [];
  let subList = [];

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (number % 2 === 0) subList.push(number);

    if (subList.length > 0 && (number % 2 !== 0 || i === numberList.length - 1)) {
      resultList.push(subList);
      subList = [];
    }
  }

  return resultList;
}
