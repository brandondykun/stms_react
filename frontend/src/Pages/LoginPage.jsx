import apiCalls from "../apiCalls/apiCalls";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = ({ setUserId, setLoggedInSoldier, setIsLoading }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log("Trying to log in");
    const data = { username: username, password: password };

    const setLoginUserData = async () => {
      const loginRes = await apiCalls.login(data);
      if (loginRes.status === 200) {
        console.log("LOGIN RES: ", loginRes);
        const decodedToken = jwt_decode(loginRes.data.access);
        console.log("DECODED TOKEN: ", decodedToken.user_id);
        setUserId(decodedToken.user_id);
        localStorage.setItem("tokens", JSON.stringify(loginRes.data));

        console.log("TRYING TO GET USER");
        const user = await apiCalls.getUserById(decodedToken.user_id);
        console.log("LOGIN USER: ", user);
        if (user.status === 200) {
          const soldier_id = user.data.soldier;

          const soldier = await apiCalls.getSoldierById(soldier_id);
          if (soldier.status === 200) {
            console.log("SOLDIER DATA: ", soldier.data);
            setLoggedInSoldier(soldier.data);
            setIsLoading(false);
            navigate("/home");
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
          <button className="login-register-button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
