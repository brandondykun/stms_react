import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokens");
    navigate("/login");
  };

  return (
    <div className="primary-nav">
      <Link className="navbar-link" to="/login">
        Log in
      </Link>
      <Link className="navbar-link" to="/register">
        Register
      </Link>
      <Link className="navbar-link" to="/my-info">
        My Info
      </Link>
      <Link className="navbar-link" to="/admin">
        Admin
      </Link>
      <Link className="navbar-link" to="/home">
        Home
      </Link>

      <button className="navbar-link" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Navbar;
<nav></nav>;
