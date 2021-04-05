import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/CustomButton';
import FormInput from '../../components/form-input/FormInput';
import Loader from '../../components/Loader/Loader';
import Rooms from '../../components/rooms/Rooms';
import { setRooms,clearRooms } from '../../redux/room-reducer';
import s from './homePage.module.scss';
import Search from './Search/Search';


const Homepage = (props)=>{
    useEffect(() => { 

        
        props.setRooms(6);
        
        return ()=>{
            props.clearRooms();
        }
    }, [])
    
    if(props.rooms.length===0){
        return (
           <Loader/>
            )
    }
    return (
        <div className="homepage">
            <h1 className={s.hotelDesc}>
            The HotelX is a modern, elegant 5-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of CityX and the  SeaX.
            </h1>
            <Search/>
            


            <Rooms rooms={props.rooms}/>
            { props.isBtnShow ? <CustomButton onClick={()=>{props.setRooms(6)}}>Show Moore</CustomButton>: "Au fort incarcate toate camerele"}
        </div>
    )
}

const mapstateToProps = (state)=>{
    return {
    rooms: state.roomPage.rooms,
    isBtnShow: state.roomPage.isBtnShow,
    }
}
export default connect(mapstateToProps,{setRooms,clearRooms,})(Homepage);