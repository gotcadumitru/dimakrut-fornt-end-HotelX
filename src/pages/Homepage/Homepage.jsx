import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../components/custom-button/CustomButton';
import Loader from '../../components/Loader/Loader';
import Rooms from '../../components/rooms/Rooms';
import { setRooms,clearRooms, getAllSelectedRooms, getAllRooms, handleBTNShow } from '../../redux/room-reducer';
import s from './homePage.module.scss';
import Search from './Search/Search';


const Homepage = (props)=>{
    useEffect(() => { 
        
        props.getAllRooms();
        
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
            <Search getAllSelectedRooms ={props.getAllSelectedRooms }/>

            <Rooms rooms={props.rooms}/>
            { props.isBtnShow ? <CustomButton onClick={()=>{ props.handleBTNShow();props.clearRooms(); props.getAllRooms()}}>Go Back</CustomButton>: "All rooms have been loaded :)"}
        </div>
    )
}

const mapstateToProps = (state)=>{
    return {
    rooms: state.roomPage.rooms,
    isBtnShow: state.roomPage.isBtnShow,
    }
}
export default connect(mapstateToProps,{handleBTNShow: handleBTNShow, setRooms,clearRooms,getAllRooms:getAllRooms, getAllSelectedRooms:getAllSelectedRooms})(Homepage);