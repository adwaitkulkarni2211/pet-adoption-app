import React, { useContext } from "react";
// import FAQ from "./FAQ";
// import Search from "./Search";
// import AboutUs from "./AboutUs";
import Hero from "./Hero";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { AuthContext } from "../context/auth";
import logo from "../assets/images/logo.png";
function NavBar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="hero-container">
      <div id="nav-container">
        <div className="logo-link">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" height={75} width={75} />
            </Link>
          </div>
        </div>
        <div className="nav-links">
          {/* <div className="nav-link">FAQ</div> */}
          <Link className="nav-link" to={'/faq'}>
            FAQ
          </Link>
          {/* <div className="nav-link">Search</div> */}
          <Link className="nav-link" to={'/adopt'}>
            Search
          </Link>
          {user ? (
            <div className="nav-link" onClick={handleLogout}>
              Logout
            </div>
          ) : (
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="hero-description">
        <Hero />
      </div>
    </div>
  );
}

export default NavBar;
