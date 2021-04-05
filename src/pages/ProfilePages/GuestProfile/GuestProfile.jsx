import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../../components/custom-button/CustomButton';
import s from './GuestProfile.module.css';
import OpenImage from '../../../assets/door/Opened.png';
import CloseImage from '../../../assets/door/Closed.png';
import QrScanner from '../../../components/QrCodeScanner/QrScanner';
import Rooms from '../../../components/rooms/Rooms';
import MenuItem from '../../../components/menu-item/MenuItem';
import FormInput from '../../../components/form-input/FormInput';

const GuestProfile = (props) => {

    const [isQrCodeCaneraStarted, setQrCodeCamerastatus] = useState(false);
    let [error, setError] = useState('');
    let [isPayForm, setIsPayForm] = useState(false);

    useEffect(() => {
        if (props.user.roomID != -1) {
            props.setUserRoom(props.user.roomID)
        } else {
            props.setRooms(3, 1);
        }
        return () => {
            props.clearRooms();
            props.clearUserRoom();
        }
    }, [props.user]);

    // useEffect(()=>{
    //     if (props.user.roomID!= -1) {
    //         props.setUserRoom(props.user.roomID)
    //     } else {
    //         props.setRooms(3, 1);
    //     }
    // },[props.user])

    const rentedPeriods = props.userRoom ? JSON.parse(props.userRoom.rented) : null;
    const userRoomImg = props.userRoom ? Object.keys(props.userRoom).filter(el => {
        if (el.indexOf('poza') !== -1) {
            return true
        }
        return false
    }).map(key => {
        return <MenuItem forImages={true} key={key} poza={props.userRoom[key]} />
    }) : '';

    let rentedComponent;
    if (props.userRoom) {

        rentedComponent = rentedPeriods.map(item => {
            const startDate = new Date(item[0]).toDateString();
            const endDate = new Date(item[1]).toDateString();
            return (
                <div className={s.aboutItem}>
                    <span className={s.rented}>From : {startDate}</span> <span className={s.rented}>To: {endDate}</span>
                </div>)

        })

    }
    const setQrRespunse = (qrScanResponse) => {
        if (qrScanResponse == props.user.roomID) {
            const dateNow = new Date().getTime();
            if (dateNow >= props.user.rentPeriod[0] && dateNow <= props.user.rentPeriod[1]) {
                props.handleDoorStatus(1, props.user.roomID);
                setQrCodeCamerastatus(false);
                setError('Usa a Fost deschisa cu succes');
                setTimeout(() => {
                    setError('');

                }, 3000)

            } else {
                setError('La moment nu inchiriati aceasta camera')

            }
        } else {
            setError('This is not the qrcode on the yout door');
        }
    }

    const clickCloseDoor = () => {
        props.handleDoorStatus(0, props.user.roomID);
        setError('Usa a fost inchisa cu succes')
        setTimeout(() => {
            setError('')

        }, 3000)
    }
    let userRentedPeriod = null;
    const checkIsUserPeriod = (rentedPeriods) => {

        const dateNow = new Date().getTime();
        userRentedPeriod = rentedPeriods.find(item => {
            if (item[2] === props.user.userID) {
                return true
            }

        })

        if (dateNow >= userRentedPeriod[0] && dateNow <= userRentedPeriod[1]) {
            return true

        }
        return false

    }
    const userCheckInClick = () => {
        props.userCheckInForReucer(props.user.roomID);
    }
    const userCheckOutClick = () => {
        props.userCheckOutForReucer(props.user.roomID);
    }
    if (props.userRoom) {
        checkIsUserPeriod(rentedPeriods)
    }
    return (
        <div>
            { !props.userRoom ? <div>
                <h2>You do not have a room? Сhoose one:</h2>
                <div className={s.ThreeRooms}>
                    {
                        <Rooms rooms={props.rooms} />}
                </div>
                <div className={s.btnContainer}>
                    <Link to='/'><CustomButton>Show Moore</CustomButton></Link>
                </div>
            </div> :

                props.userRoom.cleaned === 0 && checkIsUserPeriod(rentedPeriods) ?
                    'Asteptati pana cand cleanerul va ferifica daca tot e ok'
                    : <div>
                        <h2>Your room is beautiful:</h2>
                        <div className={s.roomImages}>
                            {
                                userRoomImg
                            }
                        </div>

                        {

                            props.userRoom.cleaned === 1 && props.userRoom.checked_in === 1 && checkIsUserPeriod(rentedPeriods) ?

                                <div className={s.doorStatus}>

                                    {!props.userRoom.door_status ? <h2>Click the button under to scan QRcode and Open the door</h2> : <h2>Click the button under to Close the door</h2>}
                                    <div className={s.imageContainer}>
                                        {
                                            isQrCodeCaneraStarted
                                                ? <div>
                                                    <div> <QrScanner setQrRespunse={setQrRespunse} /></div>
                                                    <div className={s.error}>
                                                        {error}
                                                    </div>
                                                    <div className={s.btnContainer}> <CustomButton onClick={() => { setQrCodeCamerastatus(false); setError('') }}>Cancel Scan</CustomButton></div>
                                                </div> :
                                                !props.userRoom.door_status
                                                    ? <img onClick={() => { setQrCodeCamerastatus(true); }} src={OpenImage} alt="roomstatus" />
                                                    : <img onClick={() => { clickCloseDoor() }} src={CloseImage} alt="roomstatus" />

                                        }
                                    </div>
                                    <div>
                                        <div>
                                            Tastati butonul de mai jos in ziua in care plecati din hotel

                            </div>
                                        <CustomButton onClick={userCheckOutClick}>Check Out</CustomButton>
                                    </div>
                                </div>

                                : !checkIsUserPeriod(rentedPeriods)
                                    ? <div className={s.waitRentedDay}>
                                        <div>Asteptati ziua in care ati bronat camera.</div>
                                        <div>Mai aveti de asteptat: {Math.floor((userRentedPeriod[0] - new Date().getTime()) / 86400000)} Zile</div>
                                        <div className={s.btnContainer}>
                                            <CustomButton onClick={() => { alert('in lucru') }}>Cancel Rent this room</CustomButton>
                                        </div>
                                    </div>
                                    : props.userRoom.cleaned === 1 && props.userRoom.checked_in === 0 ?
                                        <div className={s.waitRentedDay}>
                                            <div className={s.btnContainer}>
                                            <div>Camera este pregatita, puteti achita:</div>
                                            <div className='sign-up'>
                                                <h2 className='title'>Card Info</h2>
                                                <form className='sign-up-form' >
                                                    <FormInput type='text' name='nume' value='Card Number' label='Card Number' required />
                                                    <FormInput type='text' name='prenume' value='Card Name' label='Card Name' required />
                                                    <FormInput type='text' name='email' value='CVV' label='CVV' required />
                                                <CustomButton onClick={userCheckInClick}>Pay & Check-In</CustomButton>
                                                </form>
                                            </div>
                                            </div>
                                        </div>
                                        : props.userRoom.cleaned === 0 && checkIsUserPeriod(rentedPeriods) ?
                                            <div className={s.waitRentedDay}>Camera este In proces de curatare, reveniti in cateva minute</div>
                                            : 'Acum e altceva'

                        }


                        <div className={s.roomInfo}>

                        </div>
                    </div>
            }



        </div>
    )
}
export default GuestProfile
