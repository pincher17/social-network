import React from 'react';
import img from '../../img/home.png'
import s from './Home.module.css';

const Home = (props) => {



  return ( 
    <div className={s.wrapper}>
        <h1>Главная</h1>
        <img className={s.img} src={img} alt="home" />
    </div>
    )
  
}

export default Home;