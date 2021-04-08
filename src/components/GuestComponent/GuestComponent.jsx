import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import s from './GuestComponent.module.scss'

const GuestComponent = (props) => {
    const [isBtnShow, handleBtnShow] = useState(false);
    const [eroare, setEroare] = useState(props.error);

    const handleChange = (event) => {
        let { value, id } = event.target;
        props.setRoomData({ ...props.roomData, [id]: value });
        handleBtnShow(false);

    }
    const checkIdPeriodFree = (newPeriod, oldPeriod) => {
        if (oldPeriod.length === 0) {
            return true
        }
        for (let i = 0; i < oldPeriod.length; i++) {
            if (newPeriod[0] >= oldPeriod[i][0] && newPeriod[0] <= oldPeriod[i][1] || newPeriod[1] >= oldPeriod[i][0] && newPeriod[1] <= oldPeriod[i][1] || newPeriod[0] <= oldPeriod[i][0] && newPeriod[1] >= oldPeriod[i][1] ) {
                return false
            }
        }
        return true
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const days = Math.floor((Date.parse(props.roomData.endDay) - Date.parse(props.roomData.startDay)) / 86400000);
        const isFree = checkIdPeriodFree([new Date(`${props.roomData.startDay}T14:00:00`).getTime(), new Date(`${props.roomData.endDay}T12:00:00`).getTime()], props.rentPeriods)
        if (days <= 0 || !days) {
            setEroare(`Incorrect number of days`);


        } else if (props.nr_max_pers < props.roomData.nrPersoane) {
            setEroare(`You have selected too many people, maximum in this room:${props.nr_max_pers}`);
        } else if (0 >= props.roomData.nrPersoane || !props.roomData.nrPersoane ) {
            setEroare(`You have selected incorrect number of people`);

        } else if (!isFree) {
            setEroare(`The period is already reserved`);

        } else {
            
            props.setDays(days)

            setEroare(null)

            handleBtnShow(true)
        }
    }
    const rentRoom = (e) => {
        e.preventDefault(); 
        
        props.userRentRoom(new Date(`${props.roomData.startDay}T14:00:00`).getTime(), new Date(`${props.roomData.endDay}T12:00:00`).getTime(), props.user.userID, props.roomid);
        
        props.history.push(`/rent`);
    }
    let btnCopponent;
    if (props.user.userID) {
        if (props.user.roomID === -1) {
            if (isBtnShow) {
                btnCopponent = <CustomButton disabled={props.sumaSpreAchitare == 0} onClick={rentRoom}>Book</CustomButton>
            } else {
                btnCopponent = '';
            }
        } else {
            if (isBtnShow) {
                btnCopponent = 'You already have a room'
            } else {
                btnCopponent = '';
            }
        }

    } else {
        if (props.user.userID) {
            btnCopponent = 'You already have a room';
        } else {

            btnCopponent = <Link to='/sign'>Please Log in to continue</Link>
        }
    }

    return (
        <div className={s.select}>
            {
                props.user.userID ? <h2 className={s.title}>Make the right choice</h2>
                    : <h2 className={s.title}>Please log into your account before starting to fill out the form </h2>}
            <form>
                <FormInput
                    checkRoomInput={true}
                    type='number'
                    id='nrPersoane'
                    value={props.roomData.nrPersoane}
                    changeSubmitData={handleChange}
                    label='Number of Pers'
                    min={0}
                    max={10}
                    required />
                Start Day:
                <FormInput
                    checkRoomInput={true}
                    type='date'
                    id='startDay'
                    value={props.roomData.startDay}
                    changeSubmitData={handleChange}
                    placeholder="dd-mm-yyyy"
                    required />
                End Day:
                <FormInput
                    checkRoomInput={true}
                    type='date'
                    id='endDay'
                    value={props.roomData.endDay}
                    changeSubmitData={handleChange}
                    placeholder="dd-mm-yyyy"
                    required />
                <datalist id="payMethod">
                    <option value="Card" />
                    <option value="Cash" />
                    <option value="Monero" />
                    <option value="Bitcoin" />
                </datalist>
                <FormInput
                    checkRoomInput={true}
                    list="payMethod"
                    id='payMethod'
                    value={props.roomData.payMethod}
                    label='Pay method'
                    changeSubmitData={handleChange}
                    required />
                {eroare == null ? '' : <div className={s.error}>Eroare:{eroare}</div>}
                <div className={s.btns}>
                    <CustomButton onClick={handleSubmit} type='submit'>Check price</CustomButton>
                    {
                        btnCopponent
                    }
                </div>
            </form>
        </div>
    )
}
export default withRouter(GuestComponent);