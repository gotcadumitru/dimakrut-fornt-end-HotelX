import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/CustomButton';
import Rooms from '../../components/rooms/Rooms';
import { setRooms,clearRooms } from '../../redux/room-reducer';
import s from './homePage.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';


const Homepage = (props)=>{
    useEffect(() => {        
        props.setRooms();
            
        return ()=>{
            props.clearRooms();
        }
    }, [])

    if(props.rooms.length===0){
        return (
<Loader
        type="TailSpin"
        color="#000000"
        height={100}
        width={100}
        timeout={3000}
      />
            )
    }
    return (
        <div className="homepage">
            <h1 className={s.hotelDesc}>
            The HotelX is a modern, elegant 5-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of CityX and the  SeaX.
            </h1>
            <Rooms rooms={props.rooms}/>
            <Link to='/shop'>
            <CustomButton>See Moore</CustomButton>
            </Link>
        </div>
    )
}

const mapstateToProps = (state)=>{
    return {
    rooms: state.roomPage.rooms,
    }
}
export default connect(mapstateToProps,{setRooms,clearRooms,})(Homepage);