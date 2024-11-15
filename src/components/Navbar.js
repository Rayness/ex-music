import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.conteiner}>
            <nav className={style.menu}>
                <Link to="/">Каталог</Link>
                <Link to="/visualizer">Визуализатор</Link>
                <Link to="/add-song">Добавить трек</Link>
            </nav>
        </div>
    );
};

export default Navbar;
