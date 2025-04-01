import React, { useState } from "react";
import styled from "styled-components";

const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Введите email и пароль!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    onLogin();
  };

  return (
    <AuthContainer>
      <AuthForm>
        <h2>{isRegistering ? "Регистрация" : "Вход"}</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">
            {isRegistering ? "Зарегистрироваться" : "Войти"}
          </Button>
        </form>
        <p
          onClick={() => setIsRegistering(!isRegistering)}
          style={{ cursor: "pointer", marginTop: "10px", color: "#0079bf" }}
        >
          {isRegistering
            ? "Уже есть аккаунт? Войти"
            : "Нет аккаунта? Зарегистрироваться"}
        </p>
      </AuthForm>
    </AuthContainer>
  );
};

export default Auth;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AuthForm = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #00ffc4;
  color: #101114;
  padding: 10px;
  width: 100%;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background: #5aaf44;
  }
  &::after {
  }
`;
