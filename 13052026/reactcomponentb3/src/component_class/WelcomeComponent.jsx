import React from "react";

class WelcomeComponent extends React.Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Đăng nhập thành công</h2>
                <p className="card-text">
                  Xin chào <strong>{currentUser.fullName}</strong>.
                </p>
                <p className="card-text">
                  Tên đăng nhập: <strong>{currentUser.username}</strong>
                </p>
                <p className="card-text">
                  Email: <strong>{currentUser.email}</strong>
                </p>
                <p className="text-muted mb-0">
                  Bạn có thể đăng xuất bằng nút ở thanh điều hướng phía trên.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeComponent;
