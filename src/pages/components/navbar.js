import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../auth";

const Navbar = () => {
  const { isloggedin, logoutuser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutuser();
    navigate("/login");
  };

  return (
    <nav>
      <div className="nav-div">
        <Link to="/" className="navbar">
          Home
        </Link>

        {isloggedin ? (
          <>
            <Link to="/posts" className="navbar">
              Posts
            </Link>
            <Link to="/myposts" className="navbar">
              My Posts
            </Link>
            <Link to="/dashboard" className="navbar">
              Share Experience
            </Link>

            <button onClick={handleLogout} className="navbar btn-link">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar">
              Login
            </Link>
            <Link to="/register" className="navbar">
              Register
            </Link>
            <Link to="/contact" className="navbar">
              Contact Us
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
