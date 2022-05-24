import apiCalls from "../apiCalls/apiCalls";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = ({ setUserId, setUser }) => {
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
        setUserId(decodedToken.user_id);
        localStorage.setItem("tokens", JSON.stringify(loginRes.data));

        const user = await apiCalls.getUserById(decodedToken.user_id);
        if (user.status === 200) {
          const soldier_id = user.data.soldier;

          const soldier = await apiCalls.getSoldierById(soldier_id);
          if (soldier.status === 200) {
            setUser(soldier);
            navigate("/home");
          }
        }
      }
    };

    setLoginUserData();
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
