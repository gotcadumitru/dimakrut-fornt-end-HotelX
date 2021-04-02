import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import MenuItem from '../menu-item/MenuItem';
import s from './rooms.module.scss'

const Rooms = (props)=>{
    const roomsItems = props.rooms.map((el)=>{
        return(

            <MenuItem forCleaner={props.forCleaner} key={el.id} poza={el[`poza${Math.floor(Math.random() * 4)+1}`]} {...el}/>
        )
    });
    return (

        <div className={s.roomsMenu}>
            {roomsItems}
        </div>
    )
}
export default withRouter(Rooms);