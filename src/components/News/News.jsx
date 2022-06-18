import { Box, CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getFriendsThunk } from '../../redux/friends-reducer';
import { getNewsPostsThunk } from '../../redux/news-reducer';
import { getProfilePostsThunk } from '../../redux/profile-reducer';
import Preloader from '../Preloader/Preloader';
import s from './News.module.css';
import NewsName from './NewsName';
import avatar from '../../img/matureman.png'

const News = (props) => {

  

  const dispatch = useDispatch();
  const posts = useSelector(state => state.news.posts);
  const isLoading = useSelector(state => state.loading.isLoading);

  let { userId } = useParams();

  useEffect(() => {
  
      dispatch(getNewsPostsThunk(userId))
     
    }, [])


    const friends = useSelector(state => state.friends.friends);

    useEffect(() => {
    
        dispatch(getFriendsThunk())
       
      }, [])

  if (isLoading){
    return (
      <div className={s.preloader_wrapper}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color='primary' />
      </Box>
    </div>
      )
    
  }

  return ( 
    <div className={s.wrapper_all}>
        <h1>Новости</h1>
        <div className={s.wrapper_posts}>
          {posts.map((item)=>
         
          <div className={s.wrapper_post_img}>
             <NavLink to={'/profile/' + item.userId } >
            <div>
                <img className={s.profile_img} src={avatar} alt="avatar" />
            </div>
            </NavLink>
            
            <div className={s.post} key={item.id}>
                <NewsName friends={friends} item={item} />
                <div className={s.title}>{item.title}</div>
                <div className={s.body_text}>{item.body}</div>
            </div>
          </div>
         
            )}
           
        </div>
        
    </div>
    )
  
}

export default News;