// 1 push(element0, ..., elementN) Thêm cuối mảng
// 2 pop() Xoá cuối mảng
// 3 shift() Xoá đầu mảng
// 4 unshift(element0, ..., elementN) Thêm đầu mảng
// 5 splice(start, deleteCount, item1, ..., itemN) Xoá/thêm giữa mảng

// Add new items at the end
const numberList = [1, 2, 3];
numberList.push(4, 5);
console.log(numberList); // [1, 2, 3, 4, 5]

// Remove items at the end
const numberList1 = [1, 2, 3];
const lastNumber = numberList1.pop();
console.log(numberList1, lastNumber); // [1, 2], 3

// Add new items at the beginning
const numberList2 = [1, 2, 3];
numberList2.unshift(0);
console.log(numberList2); // [0,1,2,3]

//Remove items at the beginning
const numberList3 = [1, 2, 3];
const firstNumber = numberList3.shift();
console.log(numberList3, firstNumber); // [2,3] ,1

// Add / remove items ath the middle of an array
const numberList4 = [3, 5, 7];
numberList4.splice(0, 0, 2, 4);
console.log(numberList4);
