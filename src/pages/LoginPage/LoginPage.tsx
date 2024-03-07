import React from "react";
import { Button, Input } from "../../components";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
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
