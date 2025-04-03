import React from "react";
import { useAuth } from "./AuthContext";

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h1>Добро пожаловать, {user.name}!</h1>
          <button onClick={logout}>Выйти</button>
        </>
      ) : (
        <h1>Пожалуйста, войдите в систему.</h1>
      )}
    </div>
  );
};

export default UserProfile;
