import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.menu}>
                <div className={s.logo}></div>
                <ul className={s.nav}>
                    <li><NavLink className={s.navItem} to="/rate">Курс</NavLink></li>
                    <li><NavLink className={s.navItem} to="/graph">График</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;