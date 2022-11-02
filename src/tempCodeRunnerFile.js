function classifyStudentV3(mark) {
  // Validate arguments
  // mark should be in range of [0,10]
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
console.log(classifyStudentV3(0));