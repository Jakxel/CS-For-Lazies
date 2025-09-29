import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <header>
                <h1>
                    <Link  id="link1" to="/">CS for lazies</Link>
                </h1>
            </header>
        </div>
    );
}
export default Header;