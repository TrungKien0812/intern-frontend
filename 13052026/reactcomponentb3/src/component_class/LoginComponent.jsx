import React from "react";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberMe: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onLogin({
      username: this.state.username,
      password: this.state.password,
      rememberMe: this.state.rememberMe,
    });
  };

  render() {
    const { errorMessage } = this.props;

    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-5 col-lg-4 p-4 shadow-lg rounded bg-light">
          <h2 className="text-center mb-4">Đăng nhập</h2>
          {errorMessage ? (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          ) : null}
          <form className="row g-3" onSubmit={this.handleSubmit}>
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Nhập tên đăng nhập"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="password" className="form-label">
                Mật khẩu
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={this.state.rememberMe}
                  onChange={this.handleChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Ghi nhớ đăng nhập
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success w-100">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
