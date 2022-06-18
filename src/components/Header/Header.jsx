import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuth, setAuthThunk } from '../../redux/auth-reducer';
import BurgerBtn from './BurgerMenu/BurgerBtn/BurgerBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import s from './Header.module.css';
import logo from '../../img/Logo.png'

const Header = (props) =>{

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
  
  const initialLogin = localStorage.getItem("login");
  const login = JSON.parse(initialLogin);

  const initialPassword = localStorage.getItem("password");
  const password = JSON.parse(initialPassword);

  dispatch(setAuthThunk(login, password))
   
  }, [])

  let exit = () =>{
    localStorage.setItem("login", JSON.stringify(''))
    localStorage.setItem("password", JSON.stringify(''))
    dispatch(setAuth(false))
  }
  
    return (
        <header className={s.header}>
        <div className={s.header_wrapper}>
        <NavLink to={'/'}><img className={s.logo} src={logo} alt="logo" /></NavLink>
        <div className={s.login_block}>
          {isAuth
          ?<div className={s.btn_exit} onClick={exit}>Выход</div>
          :<NavLink to={'/login'}>Вход</NavLink>
          }
        </div>
        <BurgerBtn active={menuActive} setMenuActive={setMenuActive} />
        <BurgerMenu exit={exit} active={menuActive} setMenuActive={setMenuActive} />
        </div>
      </header>
    )
}

export default Header;