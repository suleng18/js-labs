// Viết hàm getTaxiCount(passengersCount) nhận vào là số hành khách và trả về là số taxi cần gọi để chở hết số khách đó
// Yêu cầu : - Khi số khách lớn hơn 4, ưu tiên dùng xe 7 chỗ
//           - Nếu số khách nhỏ hơn <= 4 thì dùng xe 4 chỗ
// Trả về con số duy nhất là tổng của cả 2 loại xe taxi cần phải gọi

//v1
function getTaxiCount(passengersCount) {
   if (passengersCount <= 0) return -1;

   if (passengersCount <= 7) return 1;
   if (passengersCount > 7 && passengersCount % 7 === 0) return passengersCount / 7;
   if (passengersCount > 7 && passengersCount % 7 !== 0) return Math.trunc(passengersCount / 7) + 1;
}
console.log(getTaxiCount(8));

//v2
function getTaxiCount(passengersCount) {
   return Math.ceil(passengersCount / 7);
}
console.log(getTaxiCount(22));
