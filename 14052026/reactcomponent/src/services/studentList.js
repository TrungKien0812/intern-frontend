const students = [
  { mssv: 2252396, name: "Nguyen Trung Kien", age: 22, classname: "CC01" },
  { mssv: 2252323, name: "Nguyen Tran Thao Nhan", age: 31, classname: "CC30" },
  { mssv: 2252312, name: "Nguyen Thao Nghia", age: 28, classname: "CC22" },
  { mssv: 2252300, name: "Nguyen Minh Nguyen", age: 63, classname: "CC10" },
  { mssv: 2252355, name: "Tran Thi Le", age: 61, classname: "CC31" },
];

export function getAll() {
  return [...students];
}
export function deleteStudent(mssv, name) {
  for (let i = 0; i < students.length; i++) {
    if (
      students[i].mssv === mssv &&
      students[i].name.toLowerCase() === name.toLowerCase()
    ) {
      students.splice(i, 1);
      break;
    }
  }
}
export function addStudent({ mssv, name, age, classname }) {
  if (!name || !mssv) {
    throw new Error(
      "Please enter essential information(mssv/name) for new student !",
    );
  }
  const newStudent = {
    mssv,
    name,
    age: age ?? 0,
    classname: classname ?? "Unknown",
  };
  students.push(newStudent);
}
export function countStudent() {
  return students.length;
}
