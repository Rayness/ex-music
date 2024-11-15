import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Каталог</Link>
            <Link to="/visualizer">Визуализатор</Link>
            <Link to="/add-song">Добавить трек</Link>
        </nav>
    );
};

export default Navbar;
