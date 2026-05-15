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

export function getByMssv(mssv) {
  return students.find((s) => s.mssv === Number(mssv));
}

export function deleteStudent(mssv, name) {
  for (let i = 0; i < students.length; i++) {
    if (
      students[i].mssv === Number(mssv) &&
      students[i].name.toLowerCase() === name.toLowerCase()
    ) {
      students.splice(i, 1);
      return true;
    }
  }
  return false;
}

export function addStudent({ mssv, name, age, classname }) {
  if (!name || !mssv) {
    throw new Error(
      "Please enter essential information(mssv/name) for new student !",
    );
  }
  const newStudent = {
    mssv: Number(mssv),
    name,
    age: age ?? 0,
    classname: classname ?? "Unknown",
  };
  students.push(newStudent);
}

export function updateStudent(mssv, { name, age, classname }) {
  const student = students.find((s) => s.mssv === Number(mssv));
  if (!student) return false;
  student.name = name;
  student.age = age;
  student.classname = classname;
  return true;
}

export function searchStudents(keyword) {
  const q = keyword.trim().toLowerCase();
  if (!q) return getAll();
  return students.filter(
    (s) =>
      String(s.mssv).includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.classname.toLowerCase().includes(q),
  );
}

export function countStudent() {
  return students.length;
}

export function isMssvExists(mssv) {
  return students.some(
    (s) => s.mssv === Number(mssv) ,
  );
}
