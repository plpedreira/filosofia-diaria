import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Filosofia</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}

export default Navbar;