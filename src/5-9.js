// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8 --> 'Excellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4 --> 'Bad'

// Kỹ thuật "Lính Canh"

// v1
function classifyStudentV1(mark) {
   // Validate arguments
   // mark should be in range of [0,10]
   if (mark < 0 || mark > 10) return 'Invalid';

   let result; // lưu trữ tạm giá trị

   if (mark > 8) result = 'Excellence';
   else if (mark >= 7) result = 'Good';
   else if (mark >= 4) result = 'Not Good';
   else result = 'Bad';

   return result;
}

// v2
function classifyStudentV2(mark) {
   // Validate arguments
   // mark should be in range of [0,10]
   if (mark < 0 || mark > 10) return '';

   let result = 'Bad';

   if (mark > 8) result = 'Excellence';
   else if (mark >= 7) result = 'Good';
   else if (mark >= 4) result = 'Not Good';

   return result;
}

//v3 use if...return
export function classifyStudentV3(mark) {
   // Validate arguments
   // mark should be in range of [0,10]
   if (mark < 0 || mark > 10) return 'Invalid mark!';

   if (mark > 8) return 'Excellence';
   if (mark >= 7) return 'Good';
   if (mark >= 4) return 'Not Good';

   return 'Bad';
}
