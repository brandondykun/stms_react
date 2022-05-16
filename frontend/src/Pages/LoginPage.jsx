import apiCalls from "../apiCalls/apiCalls";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    const data = { username: username, password: password };
    console.log("DATA: ", data);
    apiCalls
      .login(data)
      .then((res) => {
        console.log("LOGIN RESPONSE: ", res);
        if (res.status === 200) {
          console.log("logged in");
        }
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        aria-label="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        aria-label="Password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;
