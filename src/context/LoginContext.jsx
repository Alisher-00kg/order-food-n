import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const LoginContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const loginOut = () => {
    
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
