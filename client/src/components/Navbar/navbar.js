import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-title">Big_Bazar</h1>
      <Link to="/" className="navbar_component">Home</Link>
      <Link to="/my-orders" className="navbar_component">MyOrder</Link>
    </nav>
  );
}

export default Navbar;