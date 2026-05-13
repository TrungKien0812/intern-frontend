const students = [
  { id: 1, name: "Nguyen Trung Kien", age: 22, classname: "CC01" },
  { id: 2, name: "Nguyen Van Lam", age: 22, classname: "CC30" },
  { id: 3, name: "Nguyen Thi Hoa", age: 22, classname: "CC22" },
  { id: 4, name: "Nguyen Hoang Ba", age: 22, classname: "CC10" },
  { id: 5, name: "Nguyen Minh Ngon", age: 22, classname: "CC11" },
  { id: 6, name: "Nguyen Banh", age: 22, classname: "CC31" },
  { id: 7, name: "Nguyen Filip", age: 22, classname: "CC51" },
  { id: 8, name: "Nguyen Le Khiem", age: 22, classname: "CC61" },
  { id: 9, name: "Nguyen Tran Gia Huy", age: 22, classname: "CC91" },
];
export function getAll() {
  return [...students];
}
export function deleteById(id) {
  for (let i = 0; i < students.length; i++) {
    if (id === students[i].id) {
      students.splice(i, 1);
      break;
    }
  }
}

export function addStudent({ name, age, classname }) {
  if (!name) {
    throw new Error("Name is required");
  }

  const nextId =
    students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

  const newStudent = {
    id: nextId,
    name,
    age: age ?? null,
    classname: classname ?? "Unknown",
  };

  students.push(newStudent);
  return newStudent;
}
