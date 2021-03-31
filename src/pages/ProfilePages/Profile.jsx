import React from 'react';
import { connect } from 'react-redux';
import { clearRooms, setRooms,} from '../../redux/room-reducer';
import { setUserRoom,handleDoorStatus } from '../../redux/user-reducer';
import AdminProfile from './AdminProfile/AdminProfile';
import CleanerProfile from './CleanerProfile/CleanerProfile';
import UserProfile from './GuestProfile/GuestProfile';
import s from './Profile.module.css';

const Profile = (props)=>{
    return (
        <div>
        {    props.user.drept === 'admin' ? <UserProfile handleDoorStatus={props.handleDoorStatus} clearRooms={props.clearRooms} setRooms={props.setRooms} setUserRoom={props.setUserRoom} userRoom={props.userRoom} rooms={props.rooms} user={props.user}/> : '' }
        {    props.user.drept === 'user' ? <AdminProfile user={props.user}/> : '' }
        {    props.user.drept === 'cleaner' ? <CleanerProfile user={props.user}/> : '' }
        </div>
    )
}




const mapStateToProps = (state)=>{
    return {
        user: state.auth,
        rooms: state.roomPage.rooms,
        userRoom: state.user.userRoom,
    }
}

export default connect(mapStateToProps,{setUserRoom: setUserRoom,setRooms:setRooms,clearRooms:clearRooms,handleDoorStatus:handleDoorStatus})(Profile);