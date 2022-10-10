function sum(name, ...numberList) {
  console.log(name);
  return numberList.reduce((total, number) => total + number, 0);
}
console.log(sum('Long', 1));
console.log(sum('Long', 1, 2));
console.log(sum('Long', 1, 2, 3));
