import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../../components/custom-button/CustomButton';
import MenuItemComponent from '../../../components/menu-item/MenuItem';
import RoomItem from '../../../components/room-item/RoomItem';
import s from './GuestProfile.module.css';
import OpenImage from '../../../assets/door/Opened.png';
import CloseImage from '../../../assets/door/Closed.png';

const GuestProfile = (props) => {
    // debugger
    useEffect(() => {
        if (props.user.roomID[0][3] != -1) {
            props.setUserRoom(props.user.roomID[0][3])
        } else {
            props.setRooms(3, 1);
        }
        return () => {
            props.clearRooms();
        }
    }, []);

    const userRoomImg = props.userRoom ? Object.keys(props.userRoom).filter(el => {
        if (el.indexOf('poza') !== -1) {
            return true
        }
        return false
    }).map(key => {
        return <RoomItem imageUrl={props.userRoom[key]} />
    }) : 'hi';
    let [doorst, setdorst] = useState(true);

    let rentedPeriods;
    let rentedComponent;
    if (props.userRoom) {
        rentedPeriods = JSON.parse(props.userRoom.rented);

        rentedComponent = rentedPeriods.map(item => {
            const startDate = new Date(item[0]).toDateString();
            const endDate = new Date(item[1]).toDateString();
            return (
                <div className={s.aboutItem}>
                    <span className={s.rented}>From : {startDate}</span> <span className={s.rented}>To: {endDate}</span>
                </div>)

        })

        const dateNow = new Date().getDate();
    
        // debugger
        ///aici mai trebuie de lucrat nu e ok
        rentedPeriods.find(item=>{
                if (dateNow >= item[0] && dateNow <= item[1] && props.user.userID ==1) {
    
                }
    
            })
    }

        
        


    return (
        <div>
            { !props.userRoom ? <div>
                <h2>You do not have a room? Сhoose one:</h2>
                <div className={s.ThreeRooms}>
                    {
                        props.rooms.map(el => {
                            return <MenuItemComponent key={el.id} {...el} />
                        }
                        )}
                </div>
                <div className={s.btnContainer}>
                    <CustomButton>Show Moore</CustomButton>
                </div>
            </div> :
                <div>
                    <h2>Your room is beautiful:</h2>
                    <div className={s.roomImages}>
                        {
                            userRoomImg
                        }
                    </div>


                    <div className={s.doorStatus}>
                        <h2>Click the button under to {doorst ? 'Open' : 'Close'} the door</h2>
                        <div className={s.imageContainer}>
                            {/* <img onClick={props.handleDoorStatus(!props.room.doorStatus,props.user.roomID[0][3])} src={true ? OpenImage : CloseImage} alt="roomstatus"/> */}
                            <img onClick={() => { setdorst(!doorst) }} src={doorst ? OpenImage : CloseImage} alt="roomstatus" />
                        </div>
                    </div>
                </div>
            }


        </div>
    )
}
export default GuestProfile