import apiCalls from "../apiCalls/apiCalls";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = ({ setUserId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    const data = { username: username, password: password };
    // console.log("DATA: ", data);
    apiCalls
      .login(data)
      .then((res) => {
        if (res.status === 200) {
          const decodedToken = jwt_decode(res.data.access);
          setUserId(decodedToken);
          localStorage.setItem("tokens", JSON.stringify(res.data));
          navigate("/home");
        }
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
  };

  return (
    <div className="primary-content">
      <form className="flex-column-form" onSubmit={handleLoginFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // placeholder="Username"
          aria-label="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // placeholder="Password"
          aria-label="Password"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
