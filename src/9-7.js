// 1 every(callbackFn)--> Kiểm tra tất cả phần tử thoả điều kiện
// 2 some(callbackFn)--> Kiểm tra có một phần tử thoả điều kiện
// 3 indexOf(searchElement)--> Tìm vị trí đầu tiên của phần tử searchElement
// 4 lastIndexOf(searchElement)--> Tìm vị trí cuối cùng của phần tử searchElement
// 5 includes(searchElement)--> Kiểm tra có chứa phần tử searchElement không

//check if all numbers is even
[1, 2, 4].every((x) => x % 2 === 0); //false
[2, 4, 6].every((x) => x % 2 === 0); //true

// every
// v1
// Kiểm tra Even Number = method every()

export function checkIfAllEveryV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false; //check điều kiện input parameter

  let isValid = true;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]; // gán value đầu tiên khi chạy for cho number
    if (number % 2 !== 0) {
      // nếu chỉ 1 value không chia hết cho 2 thì
      isValid = false; // lọt xuống isValid return false
      break; // dừng vòng for nếu tìm thấy số lẻ và return false
    }
  }

  return isValid;
}
// console.log(checkIfAllEvery([2, 2, 3]));
// console.log(checkIfAllEvery([2, 4, 6]));

// v2 rút gọn của v1
export function checkIfAllEveryV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}
// console.log(checkIfAllEvery([2, 2, 3]));
// console.log(checkIfAllEvery([2, 4, 6]));

// check if exist one number is even
[1, 2, 4].some((x) => x % 2 === 0); //true
[1, 3, 5].some((x) => x % 2 === 0); //false
