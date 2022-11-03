function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const statistics = {};
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    if (statistics[number] === undefined) {
      statistics[number] = 1;
    } else {
      statistics[number] = statistics[number] + 1;
    }
  }

  let maxkey = undefined;
  for (const key in statistics) {
    if (maxkey === undefined || statistics[key] > statistics[maxkey]) {
      maxkey = key;
    }
  }

  return Number.parseInt(maxkey);
}
console.log(findMostFrequentNumber([1, 2, 2, 1]));
