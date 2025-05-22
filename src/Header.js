import { NavLink } from "react-router-dom";
import "./Header.css";
import  "./Home.css";

function Header() {
    return (
        <div>
            {/* Top Navbar */}
            <div className="topnav">
                <div className="logo">SportsFit</div>
                <div className="topnav-links">
                    <ul>
                        <li>
                            <NavLink to="/Home" className={({ isActive }) => (isActive ? "active" : "")}>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Side Navbar */}
            <div className="container">
                <div className="sidenav">
                    <nav>
                        <div className="navlinks">
                            <ul>
                                <li>
                                    <NavLink to="/registration" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Registration
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/members" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Members
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/id-card" className={({ isActive }) => (isActive ? "active" : "")}>
                                        ID Card
                                    </NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/validation" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Validation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/visit-history" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Visit History
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        
        </div>
    );
}

export default Header;
