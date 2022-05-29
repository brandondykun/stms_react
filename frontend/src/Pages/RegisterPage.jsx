import apiCalls from "../apiCalls/apiCalls";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    setErrors(null);

    if (password !== confirmPassword) {
      setErrors("Passwords do not match.");
      return null;
    }

    const data = {
      username: username,
      password: password,
    };

    apiCalls
      .registerUser(data)
      .then((res) => {
        console.log("RESPONSE: ", res);
        if (res.status === 201) {
          console.log("Register RESPONSE: ", res);
          const id = res.data.id;
          apiCalls
            .login(data)
            .then((res) => {
              console.log("LOGIN RESPONSE: ", res);
              if (res.status === 200) {
                localStorage.setItem("tokens", JSON.stringify(res.data));
                navigate(`/create-account/${id}`);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log("ERROR: ", err);
        if (err.response.data.username[0]) {
          setErrors(err.response.data.username[0]);
        }
        console.log(err);
      });
  };

  return (
    <div className="primary-content">
      <div className="login-register-form-container">
        <h1 className="login-register-title">Register</h1>
        <form className="flex-column-form" onSubmit={handleRegisterFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="login-register-button" type="submit">
            Register
          </button>
        </form>
      </div>
      {errors && <div className="error-text-container">{errors}</div>}
    </div>
  );
};

export default RegisterPage;
