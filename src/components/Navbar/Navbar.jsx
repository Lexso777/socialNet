import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile' className={style.a}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={style.a}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <a className={style.a} href='#'>Music</a>
            </div>
            <div className={style.item}>
                <a className={style.a} href='#'>News</a>
            </div>
            <div className={style.item}>
                <a className={style.a} href='#'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;