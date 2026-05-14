const users = [
  {
    username: "admin",
    password: "123456",
    fullName: "Quản trị viên",
    email: "admin@example.com",
  },
  {
    username: "user",
    password: "123456",
    fullName: "Người dùng",
    email: "user@example.com",
  },
];

let currentUser = null;

export function login({ username, password }) {
  const normalizedUsername = username.trim().toLowerCase();
  const matchedUser = users.find(
    (user) =>
      user.username.toLowerCase() === normalizedUsername &&
      user.password === password,
  );

  if (!matchedUser) {
    return {
      success: false,
      message: "Tên đăng nhập hoặc mật khẩu không đúng.",
    };
  }

  currentUser = {
    username: matchedUser.username,
    fullName: matchedUser.fullName,
    email: matchedUser.email,
  };

  return {
    success: true,
    user: { ...currentUser },
  };
}

export function logout() {
  currentUser = null;
}

export function getCurrentUser() {
  return currentUser ? { ...currentUser } : null;
}

export function isAuthenticated() {
  return currentUser !== null;
}
