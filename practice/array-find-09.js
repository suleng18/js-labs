// tìm vị trí
// for...i
// findIndex

// export function findStudentById(studentList, studentId) {
//   if (!Array.isArray(studentList) || studentList.length === 0) return -1;
//   for (let i = 0; i < studentList.length; i++) {
//     const student = studentList[i];
//     if (student.id === studentId) return i;
//   }

//   return -1;
// }

export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;

  return studentList.findIndex((item) => item.id === studentId);
}
