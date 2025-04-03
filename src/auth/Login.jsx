const login = async (credentials) => {
  const response = await api.post("/login", credentials);
  if (response.data.token) {
    localStorage.setItem("user", response.data.token);
    setUser(response.data.user);
  }
};

const logout = () => {
  localStorage.removeItem("uset");
  setUser(null);
};
