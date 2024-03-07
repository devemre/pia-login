import React from "react";
import { Button, Input } from "../../components";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-700">
      <div className="flex flex-col items-center gap-2 bg-red-100 p-20 rounded-lg bg-opacity-40">
        <p className="text-3xl">Login</p>
        <form onSubmit={handleSubmit}>
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
