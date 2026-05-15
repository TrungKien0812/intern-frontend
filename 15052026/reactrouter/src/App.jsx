import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Home from "./pages/Home";
import SearchStudent from "./pages/SearchStudent";
import StudentList from "./pages/StudentList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout d-flex flex-column min-vh-100">
        <Header />
        <main className="container flex-grow-1 py-3 text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/edit/:mssv" element={<EditStudent />} />
            <Route path="/students/search" element={<SearchStudent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
