const number = {
  1: 2,
  2: 3,
};

for (const key in number) {
  const element = number[key];
  console.log(key);
  console.log(element);
}
