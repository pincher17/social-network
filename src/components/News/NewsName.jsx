import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './News.module.css';

const NewsName = (props) => {


      let name = props.friends.filter((f) => f.id === props.item.userId)

  return ( 
    <div>
      {name.map((i)=>
      <NavLink to={'/profile/' + props.item.userId } >
      <div>{i.name}</div>
      </NavLink>
      )}
    </div>
    )
  
}

export default NewsName;