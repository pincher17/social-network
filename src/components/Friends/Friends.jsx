import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { getFriendsThunk } from '../../redux/friends-reducer';
import s from './Friends.module.css';
import avatar from '../../img/matureman.png'
import Preloader from '../Preloader/Preloader';


const Friends = (props) =>{

    const dispatch = useDispatch();
    const friends = useSelector(state => state.friends.friends);
    const isAuth = useSelector(state => state.auth.isAuth);
    const isLoading = useSelector(state => state.loading.isLoading);

    useEffect(() => {
    
        dispatch(getFriendsThunk())
       
      }, [])

      if (isLoading || isAuth === 'not check'){
        return <Preloader />
      }

      if (!isAuth){
        return <Navigate to='/login' />
        }
       return (
        
       <div className={s.wrapper}>
        <h1>Друзья</h1>
        {friends.map((item)=>
        <div className={s.user_wrapper} key={item.id}>
            <NavLink to={'/profile/' + item.id } >
            <div className={s.img_name_wrapper}>
                <div>
                    
                    <img src={avatar} alt="" className={s.avatar_img} />
                    
                </div>
                <div className={s.name_wrapper}>
                <div className={s.name}>{item.name}</div>
                <div className={s.username}>{item.username}</div>
                </div>
                
            </div>
            </NavLink>
            <div className={s.user_line}></div>
            
        </div>
         )}
        </div>
       )
    }


export default Friends;