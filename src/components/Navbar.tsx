// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/topics-cs">Topics-CS</Link></li>
        <li><Link to="/tech">Tech</Link></li>
        <li><Link to="/others">Others</Link></li>
        <li><a href="https://jakxel-blog.vercel.app/">Blog</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;