import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setUserId, setLoggedInSoldier, userId, loggedInSoldier }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokens");
    setLoggedInSoldier(null);
    setUserId(null);
    navigate("/login");
  };

  return (
    <div className="primary-nav">
      {!userId && (
        <Link className="navbar-link" to="/login">
          <span className="nav-link-text">Log In</span>{" "}
          <i class="fa-solid fa-right-to-bracket"></i>
        </Link>
      )}

      {!userId && (
        <Link className="navbar-link" to="/register">
          <span className="nav-link-text">Register</span>{" "}
          <i class="fa-solid fa-user-plus"></i>
        </Link>
      )}

      {userId && (
        <Link className="navbar-link" to="/my-info">
          <span className="nav-link-text">My Info</span>{" "}
          <i class="fa-solid fa-user"></i>
        </Link>
      )}

      {userId && loggedInSoldier && loggedInSoldier.is_staff && (
        <Link className="navbar-link" to="/admin">
          <span className="nav-link-text">Admin</span>{" "}
          <i class="fa-solid fa-list-check"></i>
        </Link>
      )}

      {userId && (
        <Link className="navbar-link" to="/home">
          <span className="nav-link-text">Home</span>{" "}
          <i class="fa-solid fa-house"></i>
        </Link>
      )}

      {userId && (
        <button className="navbar-link" onClick={handleLogout}>
          <span className="nav-link-text">Log Out</span>{" "}
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      )}
    </div>
  );
};

export default Navbar;
