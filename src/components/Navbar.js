import {useState} from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const setMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="navbar">
    <button className={`menu-button ${menuOpen ? 'hidden' : ''}`} onClick={setMenu}>Menu</button>
      <ul className={`menu ${menuOpen? 'open' : ''}`}>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/forgot-password">ForgotPassword</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;