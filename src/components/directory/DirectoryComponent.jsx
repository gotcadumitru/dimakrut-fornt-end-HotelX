import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import MenuItem from '../menu-item/MenuItemComponent';
import s from './directory.module.scss'

const Directory = (props)=>{
    let [menuState, changeMenuState] = useState([
        {
          categorie: 0,
          imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
          id: 1,
        },
        {
          categorie: 2,
          imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
          id: 2,
        },
        {
          categorie: 0,
          imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
          id: 3,
        },
        {
          categorie: 1,
          imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
          id: 4,
        },
        {
          categorie: 2,
          imageUrl: 'https://cf.bstatic.com/images/hotel/max1024x768/240/240113283.jpg',
          id: 5,
        },
      ])
    const menuItems = menuState.map((el)=>{
        return <MenuItem key={el.id} {...el}/>
    });
    return (

        <div className={s.directoryMenu}>
            {menuItems}
        </div>
    )
}
export default Directory;