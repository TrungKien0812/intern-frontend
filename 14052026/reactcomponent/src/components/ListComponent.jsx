import { useEffect, useState } from "react";
import { deleteStudent as removeStudent, getAll } from "../services/studentList";
import AddComponent from "./AddComponent";
import StudentCounter from "./StudentCounter";

const ListComponent = () => {
  const [studentList, setStudentList] = useState([]);
  const [count, setCount] = useState(0);
  const [studentToDelete, setStudentToDelete] = useState({
    mssv: "",
    name: "",
    age: "",
    classname: "",
  });
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    const students = getAll();
    setStudentList([...students]);
    setCount(students.length);
  }, [isReload]);

  return (
    <>
      <h1 style={{ color: "tomato" }}>Student List</h1>

      <AddComponent onStudentAdded={() => setIsReload((pre) => !pre)} />

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">MSSV</th>
            <th scope="col">NAME</th>
            <th scope="col">AGE</th>
            <th scope="col">CLASS</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, i) => (
            <tr key={i}>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.classname}</td>
              <td>
                <button
                  onClick={() => {
                    setStudentToDelete(student);
                    removeStudent(student.mssv, student.name);
                    setIsReload((pre) => !pre);
                  }}
                  className={"btn btn-sm btn-danger"}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <StudentCounter count={count} />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ListComponent;
