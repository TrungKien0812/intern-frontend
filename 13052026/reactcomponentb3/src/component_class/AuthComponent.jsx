import React from "react";
import {
  getCurrentUser,
  login,
  logout,
} from "../services/authService.js";
import HeaderComponent from "./HeaderComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";

class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: getCurrentUser(),
      errorMessage: "",
    };
  }

  handleLogin = (credentials) => {
    const result = login(credentials);

    if (result.success) {
      this.setState({
        currentUser: result.user,
        errorMessage: "",
      });
      return;
    }

    this.setState({
      currentUser: null,
      errorMessage: result.message,
    });
  };

  handleLogout = () => {
    logout();
    this.setState({
      currentUser: null,
      errorMessage: "",
    });
  };

  render() {
    const { currentUser, errorMessage } = this.state;

    return (
      <>
        <HeaderComponent
          currentUser={currentUser}
          onLogout={this.handleLogout}
        />
        {currentUser ? (
          <WelcomeComponent currentUser={currentUser} />
        ) : (
          <LoginComponent
            errorMessage={errorMessage}
            onLogin={this.handleLogin}
          />
        )}
      </>
    );
  }
}

export default AuthComponent;
