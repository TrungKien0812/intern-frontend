import { useState } from "react";
import { addStudent } from "../services/studentList";

function AddComponent({ onStudentAdded }) {
  const [newStudent, setNewStudent] = useState({
    mssv: "",
    name: "",
    age: "",
    classname: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({
      mssv: Number(newStudent.mssv),
      name: newStudent.name.trim(),
      age: Number(newStudent.age),
      classname: newStudent.classname.trim(),
    });
    setNewStudent({ mssv: "", name: "", age: "", classname: "" });
    onStudentAdded();
  };

  return (
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
  );
}

export default AddComponent;
