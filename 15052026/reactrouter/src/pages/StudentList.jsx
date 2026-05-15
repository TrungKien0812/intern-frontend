import { useState } from "react";
import { Link } from "react-router-dom";
import StudentCounter from "../components/StudentCounter";
import { deleteStudent, getAll } from "../services/studentList";

function StudentList() {
  const [studentList, setStudentList] = useState(() => getAll());

  const refreshList = () => setStudentList(getAll());

  const handleDelete = (student) => {
    if (
      window.confirm(
        `Bạn có chắc muốn xóa sinh viên ${student.name} (MSSV: ${student.mssv})?`,
      )
    ) {
      deleteStudent(student.mssv, student.name);
      refreshList();
    }
  };

  return (
    <>
      <h1 className="text-danger">Student List</h1>
      <div className="mb-3">
        <Link to="/students/add" className="btn btn-primary btn-sm">
          + Add Student
        </Link>
      </div>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">MSSV</th>
            <th scope="col">NAME</th>
            <th scope="col">AGE</th>
            <th scope="col">CLASS</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => (
            <tr key={student.mssv}>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.classname}</td>
              <td className="d-flex gap-1 justify-content-center">
                <Link
                  to={`/students/edit/${student.mssv}`}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(student)}
                  className="btn btn-sm btn-danger"
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
              <StudentCounter count={studentList.length} />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default StudentList;
