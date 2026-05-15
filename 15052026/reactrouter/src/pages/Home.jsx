import { Link } from "react-router-dom";
import { countStudent } from "../services/studentList";

function Home() {
  const total = countStudent();

  return (
    <section className="text-center py-4">
      <h1 className="text-primary">Welcome to Student Management</h1>
      <p className="lead">
        Quản lý sinh viên với React Router: danh sách, thêm, sửa, xóa và tìm
        kiếm.
      </p>
      <p className="mb-4">
        Hiện có <strong>{total}</strong> sinh viên trong hệ thống.
      </p>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <Link to="/students" className="btn btn-success">
          Xem danh sách
        </Link>
        <Link to="/students/add" className="btn btn-primary">
          Thêm sinh viên
        </Link>
        <Link to="/students/search" className="btn btn-info text-white">
          Tìm kiếm
        </Link>
      </div>
    </section>
  );
}

export default Home;
