const login = async (credentials) => {
  const response = await api.post("/login", credentials);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
  }
};

const logout = () => {
  localStorage.removeItem("token");
  setUser(null);
};
