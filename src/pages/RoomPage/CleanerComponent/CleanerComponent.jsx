import React, { useState } from 'react';
import style1 from '../../ProfilePages/GuestProfile/GuestProfile.module.css';
import style2 from './CleanerComponent.module.css';
import OpenImage from '../../../assets/door/Opened.png';
import CloseImage from '../../../assets/door/Closed.png';
import { handleDoorStatus } from '../../../redux/user-reducer';
import QrScanner from '../../../components/QrCodeScanner/QrScanner';
import CustomButton from '../../../components/custom-button/CustomButton';
import { connect } from 'react-redux';

const CleanerComponent = (props)=>{

    const [isQrCodeCaneraStarted, setQrCodeCamerastatus] = useState(false);
    let [isDoorClosed, handleDorStatus] = useState(true);
    let [error, setError] = useState('');


    const setQrRespunse = (qrScanResponse)=>{

        if(qrScanResponse == props.room.id){
                handleDorStatus(false);
                setQrCodeCamerastatus(false);
                setError('Usa a Fost deschisa cu succes');
                setTimeout(()=>{
                    setError('');

                },3000)

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
        <div className={style1.isDoorClosedatus}>
        { isDoorClosed ? <h2>Click the button under to scan QRcode and Open the door</h2> : <h2>Click the button under to Close the door</h2>}
        <div className={style1.imageContainer}>
    {
        isQrCodeCaneraStarted 
        ? <div>
        <div> <QrScanner setQrRespunse={setQrRespunse}/></div>
    <div className={style1.error}>
    {error}
    </div>
        <div className={style1.btnContainer}> <CustomButton onClick={()=>{setQrCodeCamerastatus(false); setError('')}}>Cancel Scan</CustomButton></div>
    </div> :
         isDoorClosed 
        ? <img onClick={() => { setQrCodeCamerastatus(true); }} src={OpenImage} alt="roomstatus" /> 
        : <img onClick={() => { clickCloseDoor() }} src={CloseImage} alt="roomstatus" />
        
    }
        </div>
    </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        user: state.auth,
    }
}

export default connect(mapStateToProps,{handleDoorStatus:handleDoorStatus})(CleanerComponent);