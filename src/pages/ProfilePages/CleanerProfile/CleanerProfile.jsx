import React, { useEffect } from 'react';
import Rooms from '../../../components/rooms/Rooms';
import s from './CleanerProfile.module.css';

const CleanerProfile = (props)=>{
    useEffect(()=>{
        props.getAllRooms();
        return ()=>{
            props.clearRooms();
        }
    },[])
    return (
        <div>
            <div className={s.toCleanHeader}>Room that need to Clean:</div>
            <Rooms forCleaner={true} rooms={props.roomsToClean} />
        </div>
    )
}
export default CleanerProfile;