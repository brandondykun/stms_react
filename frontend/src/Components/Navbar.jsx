import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokens");
    navigate("/login");
  };

  return (
    <div>
      <Link to="/login">Log in</Link>
      <Link to="/register">Register</Link>
      <Link to="/my-info">My Info</Link>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Navbar;
<nav></nav>;
