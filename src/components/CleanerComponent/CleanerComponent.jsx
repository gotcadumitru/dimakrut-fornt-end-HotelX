import React, { useEffect, useState } from 'react';
import style1 from '../../pages/ProfilePages/GuestProfile/GuestProfile.module.css';
import style2 from './CleanerComponent.module.css';
import OpenImage from '../../assets/door/Opened.png';
import CloseImage from '../../assets/door/Closed.png';
import { cleanRoomForReducer, handleDoorStatus, handleDoorStatusCleaner } from '../../redux/user-reducer';
import QrScanner from '../../components/QrCodeScanner/QrScanner';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';

const CleanerComponent = (props) => {

    const [isQrCodeCaneraStarted, setQrCodeCamerastatus] = useState(false);
    let [error, setError] = useState('');
    const setQrRespunse = (qrScanResponse) => {

        if (qrScanResponse == props.room.id) {
            props.handleDoorStatusCleaner(1,props.room.id);
            setQrCodeCamerastatus(false);
            setError('The door was successfully opened');
            setTimeout(() => {
                setError('');

            }, 3000)

        } else {
            setError("It's not the code on your door");
        }
    }
    const clickCloseDoor = () => {
        props.handleDoorStatusCleaner(0,props.room.id); 
        setError('The door was closed successfully')
        setTimeout(() => {
            setError('')

        }, 3000)
    }
    return (
        <div className={style1.isDoorClosedatus}>
            { !props.room.door_status ? <h2>Click the button under to scan QRcode and Open the door</h2> : <h2>Click the button under to Close the door</h2>}
            <div className={style1.imageContainer}>
                {
                    isQrCodeCaneraStarted
                        ? <div>
                            <div> <QrScanner setQrRespunse={setQrRespunse} /></div>
                            <div className={style1.error}>
                                {error}
                            </div>
                            <div className={style1.btnContainer}> <CustomButton onClick={() => { setQrCodeCamerastatus(false); setError('') }}>Cancel Scan</CustomButton></div>
                        </div> :
                        !props.room.door_status
                            ? <img onClick={() => { setQrCodeCamerastatus(true); }} src={OpenImage} alt="roomstatus" />
                            : <img onClick={() => { clickCloseDoor() }} src={CloseImage} alt="roomstatus" />
                }
                {
                    props.room.cleaned === 0 &&
                    <div className={style2.btnContainer}>
                        <div>Type the button below if you cleaned the room</div>
                        <CustomButton onClick={()=>{props.cleanRoomForReducer(props.room.id,props.endDate)}}>Room was Cleaned</CustomButton>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
    }
}

export default connect(mapStateToProps, { handleDoorStatusCleaner:handleDoorStatusCleaner, cleanRoomForReducer: cleanRoomForReducer })(CleanerComponent);