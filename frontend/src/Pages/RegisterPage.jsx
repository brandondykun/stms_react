import apiCalls from "../apiCalls/apiCalls";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    apiCalls
      .registerUser(data)
      .then((res) => {
        if (res.status === 201) {
          console.log("Register RESPONSE: ", res);
          // navigate("/login");
          const id = res.data.id;
          apiCalls
            .login(data)
            .then((res) => {
              if (res.status === 200) {
                localStorage.setItem("tokens", JSON.stringify(res.data));
                navigate(`/create-account/${id}`);
              }
            })
            .catch((err) => {
              // setErrors(err);
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="primary-content">
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
