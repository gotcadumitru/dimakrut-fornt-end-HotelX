import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../../../components/custom-button/CustomButton';
import FormInput from '../../../components/form-input/FormInput';
import s from './RoomPageForm.module.scss'

const RoomPageForm = (props) => {

    const [isBtnShow, handleBtnShow] = useState(false);
    const [eroare, setEroare] = useState(null);

    const handleChange = (event) => {
        let { value, id } = event.target;
        props.setRoomData({ ...props.roomData, [id]: value });
        handleBtnShow(false);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const days = Math.floor((Date.parse(props.roomData.endDay) - Date.parse(props.roomData.startDay)) / 86400000);
        if (days <= 0 || !days) {
            setEroare(`Incorrect number of days`);


        } else if (props.nr_max_pers < props.roomData.nrPersoane) {
            setEroare(`You have selected too many people, maximum in this room:${props.nr_max_pers}`);

        } else if (0 >= props.roomData.nrPersoane || !props.roomData.nrPersoane) {
            setEroare(`You have selected incorrect number of people`);

        } else {

            props.setDays(days)

            setEroare(null)

            handleBtnShow(true)
        }

    }

    return (
        <div className={s.select}>
            {
                props.user.userID ? <h2 className={s.title}>Make the right choice</h2>
                    : <h2 className={s.title}>Please log into your account before starting to fill out the form </h2>}
            <form>
                <FormInput type='number' id='nrPersoane' value={props.roomData.nrPersoane} changeSubmitData={handleChange} label='Number of Pers' required />
                Start Day:
                <FormInput type='date' id='startDay' value={props.roomData.startDay} changeSubmitData={handleChange} label='' required />
                End Day:
                <FormInput type='date' id='endDay' value={props.roomData.endDay} changeSubmitData={handleChange} label='' required />
                <datalist id="payMethod">
                    <option value="Card" />
                    <option value="Cash" />
                    <option value="Bitcoin" />
                </datalist>
                <FormInput list="payMethod" id='payMethod' value={props.roomData.payMethod} label='Pay method' changeSubmitData={handleChange} required />
                {eroare === null ? '' : <div className={s.error}>Eroare: {eroare}</div>}
                <div className={s.btns}>
                    <CustomButton onClick={handleSubmit} type='submit'>Check price</CustomButton>
                    { 
                    props.user.userID ? isBtnShow && <CustomButton disabled={props.sumaSpreAchitare == 0}>Check-In</CustomButton> : isBtnShow && <Link to='/sign'>Please Log in to continue</Link>
                     }
                    {/* {props.user.userID ? isBtnShow ? isBtnShow && <CustomButton disabled={props.sumaSpreAchitare == 0}>Check-In</CustomButton> : '' : <Link to='/sign'>Please Log in</Link>}
                    {isBtnShow && <CustomButton disabled={props.sumaSpreAchitare == 0}>Check-In</CustomButton>} */}
                </div>
            </form>
        </div>
    )
}
export default RoomPageForm