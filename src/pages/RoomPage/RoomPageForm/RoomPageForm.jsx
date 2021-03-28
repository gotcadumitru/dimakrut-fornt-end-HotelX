import React, { useState } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../../components/custom-button/CustomButton';
import FormInput from '../../../components/form-input/FormInput';
import './RoomPageForm.module.scss'

const RoomPageForm = (props) => {
    const [roomData, setRoomData] = useState(
        {
            nrPersoane: '',
            startDay: '',
            endDay: '',
            metPlata: '',
        });

    const handleChange = (event) => {
        let { value, id } = event.target;
        setRoomData({ ...roomData, [id]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        debugger
        setRoomData(
            {
                nrPersoane: '',
                startDay: '',
                endDay: '',
                metPlata: '',
            })

    }

    return (
        <div className='sign-up'>
            <h2 className='title'>Make the right choice</h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='number' id='nrPersoane' value={roomData.nrPersoane} changeSubmitData={handleChange} label='Number of Pers' required />
                <FormInput type='date' id='startDay' value={roomData.startDay} changeSubmitData={handleChange} label='' required />
                <FormInput type='date' id='endDay' value={roomData.endDay} changeSubmitData={handleChange} label='' required />
                <datalist id="payMethod">
                    <option  value="Card" />
                    <option value="Cash" />
                    <option value="Bitcoin" />
                </datalist>
                <FormInput list="payMethod" id='payMethod' value={roomData.metPlata} label='Pay method' handleChange={handleChange} />
                <CustomButton type='submit'>Select this</CustomButton>
            </form>
        </div>
    )
}


const mapstateToProps = (state) => {
    return {

    }
}
export default connect(mapstateToProps, {})(RoomPageForm);