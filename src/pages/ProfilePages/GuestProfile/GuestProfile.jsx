import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../../components/custom-button/CustomButton';
import MenuItemComponent from '../../../components/menu-item/MenuItem';
import RoomItem from '../../../components/room-item/RoomItem';
import s from './GuestProfile.module.css';
import OpenImage from '../../../assets/door/Opened.png';
import CloseImage from '../../../assets/door/Closed.png';
import QrScanner from '../../../components/QrCodeScanner/QrScanner';

const GuestProfile = (props) => {
    
    const [isQrCodeCaneraStarted, setQrCodeCamerastatus] = useState(false);
    let [isDoorClosed, handleDorStatus] = useState(true);
    let [error, setError] = useState('');
    useEffect(() => {
        if (props.user.roomID!= -1) {
            props.setUserRoom(props.user.roomID)
        } else {
            props.setRooms(3, 1);
        }
        return () => {
            props.clearRooms();
            props.clearUserRoom();
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
        
    }
    const setQrRespunse = (qrScanResponse)=>{
        if(qrScanResponse == props.user.roomID){
            const dateNow = new Date().getTime();
            if( dateNow >= props.user.rentPeriod[0] && dateNow <= props.user.rentPeriod[1] ){
                handleDorStatus(false);
                setQrCodeCamerastatus(false);
                setError('Usa a Fost deschisa cu succes');
                setTimeout(()=>{
                    setError('');

                },3000)

            }else{
                setError('La moment nu inchiriati aceasta camera')

            }
        }else{
            setError('This is not the qrcode on the yout door');
        }
    }

        
        
    const clickCloseDoor = ()=>{
        handleDorStatus(!isDoorClosed); 
        setError('Usa a fost inchisa cu succes')
        setTimeout(()=>{
            setError('')

        },3000)
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
                    <Link to='/'><CustomButton>Show Moore</CustomButton></Link> 
                </div>
            </div> :
                <div>
                    <h2>Your room is beautiful:</h2>
                    <div className={s.roomImages}>
                        {
                            userRoomImg
                        }
                    </div>

                    <div className={s.isDoorClosedatus}>
                        { isDoorClosed ? <h2>Click the button under to scan QRcode and Open the door</h2> : <h2>Click the button under to Close the door</h2>}
                        <div className={s.imageContainer}>
                            {/* <img onClick={props.handleisDoorClosedatus(!props.room.isDoorClosedatus,props.user.roomID)} src={true ? OpenImage : CloseImage} alt="roomstatus"/> */}
                    {
                        isQrCodeCaneraStarted 
                        ? <div>
                        <div> <QrScanner setQrRespunse={setQrRespunse}/></div>
                        <div className={s.btnContainer}> <CustomButton onClick={()=>{setQrCodeCamerastatus(false); setError('')}}>Cancel Scan</CustomButton></div>
                    </div> :
                         isDoorClosed 
                        ? <img onClick={() => { setQrCodeCamerastatus(true); }} src={OpenImage} alt="roomstatus" /> 
                        : <img onClick={() => { clickCloseDoor() }} src={CloseImage} alt="roomstatus" />
                        
                    }
                    <div className={s.error}>
                    {error}
                    </div>
                        </div>
                    </div>


                    <div className={s.roomInfo}>
                        
                    </div>
                </div>
            }



        </div>
    )
}
export default GuestProfile