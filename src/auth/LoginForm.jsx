import React, { useState } from "react";
import { useAuth } from "../context/LoginContext";

import Input from "../components/UI/Input";
import styled from "styled-components";
import { Button } from "../components/UI/Button";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login({ username, password });
    } catch (error) {
      console.error("Ошибка при входе:", error);
    }
  };

  return (
    <>
      <AuthContainer>
        <AuthForm onSubmit={handleSubmit}>
          <StyledBox>
            <label htmlFor="username">Email:</label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
            Войти
          </StyledButton>
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
