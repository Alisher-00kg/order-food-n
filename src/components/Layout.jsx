import React, { useEffect, useState } from "react";
import Header from "./HeaderSecond";
import Footer from "./Footer";
import LoginForm from "../auth/LoginForm";

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const handleAuthToggle = () => {
    if (isAuthenticated) {
      localStorage.removeItem("user");
      setIsAuthenticated(false);
    }
  };
  if (!isAuthenticated) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />;
  }
  return (
    <div>
      <Header isAuth={isAuthenticated} onAuthToggle={handleAuthToggle} />
      <Footer />
    </div>
  );
};

export default Layout;
