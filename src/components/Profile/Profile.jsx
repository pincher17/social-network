import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getProfilePostsThunk, getProfileThunk } from '../../redux/profile-reducer';
import Preloader from '../Preloader/Preloader';
import s from './Profile.module.css';
import avatar from '../../img/matureman.png'

const Profile = (props) => {

 

  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  const posts = useSelector(state => state.profile.posts);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isLoading = useSelector(state => state.loading.isLoading);

  let { userId } = useParams();

  if(!userId) userId = 1;

  useEffect(() => {
  
      dispatch(getProfileThunk(userId))
     
    }, [])

    useEffect(() => {
  
        dispatch(getProfilePostsThunk(userId))
       
      }, [])

  console.log(isAuth)

  if (isLoading || isAuth === 'not check'){
    return <Preloader />
  }
  
  if (!isAuth){
    return <Navigate to='/login' />
  }
 
  return ( 
    <div className={s.wrapper_all}>
        <div className={s.wrapper}>
          <div>
          <img className={s.profile_img} src={avatar} alt="avatar" />
          </div>

          <div className={s.wrapper_info}>
            <div className={s.full_name}>{profile.name}</div>
            <div className={s.username}>{profile.username}</div>
            <div className={s.text_info}>Email: {profile.email}</div>
            <div className={s.text_info}>Phone: {profile.phone}</div>
            <div className={s.text_info}>website: {profile.website}</div>
          </div>
          </div>
          
          <div className={s.wrapper_posts}>
          {posts.map((item)=>
            <div className={s.posts} key={item.id}>
                <div className={s.title}>{item.title}</div>
                <div className={s.body_text}>{item.body}</div>
            </div>
            )}
          </div>
            
        
    </div>
    )
  
}

export default Profile;