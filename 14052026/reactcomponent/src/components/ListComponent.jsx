import { useEffect, useState } from "react";
import {
  addStudent,
  deleteStudent as removeStudent,
  getAll,
} from "../services/studentList";
import StudentCounter from "./StudentCounter";

const ListComponent = () => {
  const [studentList, setStudentList] = useState([]);
  const [count, setCount] = useState(0);
  const [newStudent, setNewStudent] = useState({
    mssv: "",
    name: "",
    age: "",
    classname: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({
      mssv: Number(newStudent.mssv),
      name: newStudent.name.trim(),
      age: Number(newStudent.age),
      classname: newStudent.classname.trim(),
    });
    setNewStudent({ mssv: "", name: "", age: "", classname: "" });
    setIsReload((pre) => !pre);
  };
  return (
    <>
      <h1 style={{ color: "tomato" }}>Student List</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputMssv" className="form-label">
            MSSV
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputMssv"
            value={newStudent.mssv}
            onChange={(e) =>
              setNewStudent({ ...newStudent, mssv: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAge"
            value={newStudent.age}
            onChange={(e) =>
              setNewStudent({ ...newStudent, age: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputClass" className="form-label">
            Class
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputClass"
            value={newStudent.classname}
            onChange={(e) =>
              setNewStudent({ ...newStudent, classname: e.target.value })
            }
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

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
            <td colSpan="5">{<StudentCounter count={count} />}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
export default ListComponent;
