import React, { useState } from "react";
import { Button, Input } from "../../components";
import { useAuth } from "../../context/AuthProvider";

const LoginPage = () => {
  const auth = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await auth.login(username, password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen animated-gradient">
      <div className="flex flex-col items-center gap-4 bg-slate-800 p-20 rounded-lg bg-opacity-50 shadow-md">
        <p className="text-3xl text-white">Login</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            name="username"
            type="text"
            label="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button label="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
