import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Redirect, Navigate } from 'react-router-dom';
import { setAuthThunk } from '../../redux/auth-reducer';
import Preloader from '../Preloader/Preloader';
import s from './Login.module.css';

const Login = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);
    const error = useSelector(state => state.auth.error);
    const isCheck = useSelector(state => state.auth.isCheck);
    const isLoading = useSelector(state => state.loading.isLoading);

    let handleSubmit = () =>{
        dispatch(setAuthThunk(login, password, true))
        localStorage.setItem("login", JSON.stringify(login))
        localStorage.setItem("password", JSON.stringify(password))
    }
 
   

    if (isAuth){
        return <Navigate to='/profile' />
    }
    
  return ( 
    <div className={s.wrapper}>
        <h1>Войти</h1>
        <form>
            <div className={s.login}>
                <input value={login} 
                    onChange={(e) => setLogin(e.target.value)} 
                    type="text" placeholder='Логин' 
                    className={error ? s.input_error : s.input_login}/>
            </div>
            <div className={s.password}>
                <input value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" placeholder='Пароль' 
                    className={error ? s.input_error : s.input_password} />
                </div>
                
            <button disabled={isCheck && true} 
            onClick={handleSubmit} 
            className={isCheck ? s.btn_disabled : s.btn} 
            type='button'>
            {
            isCheck ? 'Проверяю...' : 'Войти'
            }
            </button>
        </form>
        
        {error && <div className={s.error_message}>Имя пользователя или пароль введены не верно</div>}
    </div>
    )
  
}

export default Login;