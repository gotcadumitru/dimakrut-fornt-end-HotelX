import React, { useEffect } from 'react';
import Rooms from '../../../components/rooms/Rooms';
import { TableRoom } from '../AdminProfile/AdminProfile';
import s from './CleanerProfile.module.css';

const CleanerProfile = (props) => {
    useEffect(() => {
        props.getAllRooms();
        return () => {
            props.clearRooms();
        }
    }, [])
    return (
        <div>
            {props.roomsToClean.length>0 ? <div>
                <Rooms forCleaner={true} rooms={props.roomsToClean} />
            </div>
            :
            <div className={s.toCleanHeader}>Nothing to clean :)</div>
            }
            {props.rooms && <TableRoom history={props.history} rooms={props.rooms} />}

        </div>
    )
}
export default CleanerProfile;