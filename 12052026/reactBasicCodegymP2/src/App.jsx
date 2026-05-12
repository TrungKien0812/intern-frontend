import "./App.css";
import "./index.css";

function App() {
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
    </>
  );
}

export default App;
