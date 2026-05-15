import { useState } from "react";
import { Link } from "react-router-dom";
import StudentCounter from "../components/StudentCounter";
import { searchStudents } from "../services/studentList";

function SearchStudent() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(searchStudents(keyword));
  };

  return (
    <section>
      <h1 className="text-info">Search Student</h1>
      <form
        onSubmit={handleSearch}
        className="row g-2 justify-content-center mb-4"
      >
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Tìm theo MSSV, tên hoặc lớp..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-info text-white">
            Search
          </button>
        </div>
      </form>

      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>MSSV</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CLASS</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {results.map((student) => (
            <tr key={student.mssv}>
              <td>{student.mssv}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.classname}</td>
              <td>
                <Link
                  to={`/students/edit/${student.mssv}`}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <StudentCounter count={results.length} />
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

export default SearchStudent;
