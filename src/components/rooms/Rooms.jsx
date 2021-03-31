import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import MenuItem from '../menu-item/MenuItem';
import s from './rooms.module.scss'

const Rooms = (props)=>{
    const roomsItems = props.rooms.map((el)=>{
        return <MenuItem key={el.id} {...el}/>
    });
    return (

        <div className={s.roomsMenu}>
            {roomsItems}
        </div>
    )
}
export default Rooms;