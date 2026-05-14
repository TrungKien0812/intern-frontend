import React from "react";

class HeaderComponent extends React.Component {
  handleLogoutClick = () => {
    this.props.onLogout();
  };

  render() {
    const { currentUser } = this.props;

    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Ứng dụng đăng nhập</span>
          {currentUser ? (
            <div className="d-flex align-items-center gap-3">
              <span className="navbar-text">
                Xin chào, <strong>{currentUser.fullName}</strong>
              </span>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={this.handleLogoutClick}
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <span className="navbar-text">Chưa đăng nhập</span>
          )}
        </div>
      </nav>
    );
  }
}

export default HeaderComponent;
