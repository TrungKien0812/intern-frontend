import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        {/* Giới hạn độ rộng của form (ví dụ: 4/12 cột trên màn hình md) */}
        <div className="col-12 col-md-5 col-lg-4 p-4 shadow-lg rounded bg-light">
          <h2 className="text-center mb-4">Login</h2>
          <form className="row g-3">
            <div className="col-12">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-12">
              <label for="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
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
              <button type="submit" className="btn btn-success">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
