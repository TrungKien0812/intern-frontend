import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { addStudent } from "../services/studentList";
import {
  createStudentSchema,
  studentInitialValues,
} from "../schemas/studentSchema";

function AddStudent() {
  const navigate = useNavigate();
  const validationSchema = useMemo(() => createStudentSchema(), []);

  const handleSubmit = (values) => {
    addStudent({
      mssv: Number(values.mssv),
      name: values.name.trim(),
      age: Number(values.age),
      classname: values.classname.trim(),
    });
    navigate("/students");
  };

  return (
    <section>
      <h1 className="text-primary">Add Student</h1>
      <div className="card p-4 mx-auto" style={{ maxWidth: 520 }}>
        <StudentForm
          initialValues={studentInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          submitLabel="Submit"
        />
      </div>
    </section>
  );
}

export default AddStudent;
