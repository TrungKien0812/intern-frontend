import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { getByMssv, updateStudent } from "../services/studentList";
import { createStudentSchema } from "../schemas/studentSchema";

function EditStudentForm({ student, mssv }) {
  const navigate = useNavigate();
  const validationSchema = useMemo(
    () => createStudentSchema({ isEdit: true }),
    [],
  );

  const initialValues = {
    mssv: String(student.mssv),
    name: student.name,
    age: String(student.age),
    classname: student.classname,
  };

  const handleSubmit = (values) => {
    updateStudent(mssv, {
      name: values.name.trim(),
      age: Number(values.age),
      classname: values.classname.trim(),
    });
    navigate("/students");
  };

  return (
    <section>
      <h1 className="text-warning">Edit Student</h1>
      <div className="card p-4 mx-auto" style={{ maxWidth: 520 }}>
        <StudentForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          submitLabel="Update"
          readOnlyMssv
          enableReinitialize
        />
      </div>
    </section>
  );
}

function EditStudent() {
  const { mssv } = useParams();
  const student = getByMssv(mssv);

  if (!student) {
    return (
      <section className="text-center">
        <h1 className="text-danger">Student not found</h1>
        <Link to="/students" className="btn btn-secondary">
          Back to list
        </Link>
      </section>
    );
  }

  return <EditStudentForm key={mssv} student={student} mssv={mssv} />;
}

export default EditStudent;
