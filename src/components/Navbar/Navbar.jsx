import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) =>{

    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/" activeClassName={s.active}>На главную</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/friends" activeClassName={s.active}>Друзья</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;