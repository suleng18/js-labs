// Duyệt các phần tử của array = for
// before ES5 for i : dùng khi bạn cần loop một giá trị đến một giá trị
const numberList1 = [2, 4, 6];
for (let i = 0; i < numberList1.length; i++) {
   const number = numberList[i];
   console.log(number); // 2, 4, 6
}

// ES5 forEach : lấy được elements và index
// () => {}: arrow function
//v1
const numberList = [2, 4, 6];
numberList.forEach((number, index) => {
   console.log(number, index);
});
//v2
const numberList2 = [2, 4, 6];
numberList2.forEach((number) => {
   console.log(number);
});
//v3
const numberList3 = [2, 4, 6];
numberList3.forEach((number) => console.log(number));
//v4
const numberList4 = [2, 4, 6];
numberList4.forEach((x) => console.log(x));

// ES6 for...of : bạn sẽ không lấy được index
const numberList5 = [2, 4, 6];
for (const number of numberList5) {
   console.log(number); // 2, 4, 6
}
