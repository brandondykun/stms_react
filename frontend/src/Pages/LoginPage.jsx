import apiCalls from "../apiCalls/apiCalls";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = ({ setLoggedInSoldier, setIsLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const data = { username: username, password: password };

    const setLoginUserData = async () => {
      const loginRes = await apiCalls.login(data);
      if (loginRes.status === 200) {
        const decodedToken = jwt_decode(loginRes.data.access);
        localStorage.setItem("tokens", JSON.stringify(loginRes.data));

        const user = await apiCalls.getSoldierById(decodedToken.user_id);
        if (user.status === 200) {
          setLoggedInSoldier(user.data);
          setIsLoading(false);
          if (user.data.first_name) {
            navigate("/home");
          } else {
            navigate(`/create-account/${user.data.id}`);
          }
        }
      }
    };

    setLoginUserData();
  };

  return (
    <div className="primary-content">
      <div className="login-register-form-container">
        <h1 className="login-register-title">Log In</h1>
        <form className="flex-column-form" onSubmit={handleLoginFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <button className="login-register-button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
