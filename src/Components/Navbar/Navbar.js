import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./shoe-store-logo.png";
const linkStyle = {
  textDecoration: "none",
  color: "black",
  margin: '5px',
  fontSize: '22px'
};
const Navbar = () => {
  return (
    <div className="navbar-main-container">
      <img className="logo" src={logo} alt='shoe store logo'/>
      <div className="nav-link">
        <NavLink
          style={linkStyle}
          
          activeStyle={{
            color: "#5D15B4",
          }}
          
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          style={linkStyle}
          to="/about"
          activeStyle={{
            color: "#5D15B4",
          }}
        >
          About us
        </NavLink>
        <NavLink
          style={linkStyle}
          to="/product"
          activeStyle={{
            color: "#5D15B4",
          }}
        >
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
