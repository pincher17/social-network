import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './BurgerMenu.module.css';

const BurgerMenu = (props) => {
  const isAuth = useSelector(state => state.auth.isAuth);
     let active = props.active

      return (
      
      <div className={props.active ? s.blur + ' ' + s.active : s.blur } onClick={()=> props.setMenuActive(!active)}>
        <div className={props.active ? s.burger_menu_wrapper + ' ' + s.active : s.burger_menu_wrapper}>
          <div className={s.menu_content}>
          <nav className={s.nav_links}>
           <NavLink to="/"  className={({ isActive }) =>
              isActive ? s.active : undefined
            }>На главную</NavLink>
			     <NavLink to="/profile" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Профиль</NavLink>
			     <NavLink to="/friends" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Друзья</NavLink>
           <NavLink to="/news" className={({ isActive }) =>
              isActive ? s.active : undefined
            }>Новости</NavLink>
          <div className={s.login_block}>
          {isAuth
          ?<div className={s.btn_exit} onClick={props.exit}>Выход</div>
          :<div className={s.btn_enter}><NavLink to={'/login'}>Вход</NavLink></div>
          }
        </div>
		      </nav>
          </div>
        </div>
      </div>
      );
    }
    
    export default BurgerMenu;