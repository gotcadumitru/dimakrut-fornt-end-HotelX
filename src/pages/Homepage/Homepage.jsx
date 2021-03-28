import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/CustomButton';
import Rooms from '../../components/rooms/Rooms';
import { setRooms,clearRooms } from '../../redux/room-reducer';

const Homepage = (props)=>{
    useEffect(() => {
        props.setRooms();

        return ()=>{
            // props.clearRooms();
        }
    }, [])
    return (
        <div className="homepage">
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