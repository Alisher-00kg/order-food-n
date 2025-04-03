import React, { useState } from "react";
import Input from "../components/UI/Input";
import styled from "styled-components";
import { Button } from "../components/UI/Button";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Введите email и пароль!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    onLogin();
  };

  return (
    <>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit}>
          <h2>{isRegistering ? "Регистрация" : "Вход"}</h2>
          <StyledBox>
            <label htmlFor="username">Email:</label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите email"
            />
          </StyledBox>
          <StyledBox>
            <label htmlFor="password">Пароль:</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Введите пароль"
            />
          </StyledBox>
          <StyledButton type="submit" variant={"add"}>
            {isRegistering ? "Зарегистрироваться" : "Войти"}
          </StyledButton>
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
    </>
  );
};

export default LoginForm;

const AuthContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const StyledBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
`;
const AuthForm = styled.div`
  width: 400px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const StyledButton = styled(Button)`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: none;
  box-shadow: 0px 4px 5px 0px #98d5f1;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background: #7e2a0a;
  }
  &:active {
    background: #993108;
  }
`;
