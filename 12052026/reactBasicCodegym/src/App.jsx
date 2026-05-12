import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
function App() {
  const cities = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Ha Noi"),
    React.createElement("li", null, "Da Nang"),
    React.createElement("li", null, "TPHCM"),
    React.createElement("li", null, "Hai Phong"),
    React.createElement("li", null, "Can Tho"),
  );
  const students = [
    { id: 1, name: "Nguyen Trung Kien", age: 22, classe: "CC01" },
    { id: 2, name: "Nguyen Hehe", age: 22, classe: "CC30" },
    { id: 3, name: "Nguyen Haha", age: 22, classe: "CC22" },
    { id: 4, name: "Nguyen Hihi", age: 22, classe: "CC10" },
    { id: 5, name: "Nguyen Hoho", age: 22, classe: "CC11" },
    { id: 6, name: "Nguyen Hhhhh", age: 22, classe: "CC31" },
    { id: 7, name: "Nguyen Kien", age: 22, classe: "CC51" },
    { id: 8, name: "Nguyen Khiem", age: 22, classe: "CC61" },
    { id: 9, name: "Nguyen Huy", age: 22, classe: "CC91" },
  ];
  return (
    <>
      <h1>List of cities:</h1>
      {cities}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Classes</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.classe}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Remember me
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-danger">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
