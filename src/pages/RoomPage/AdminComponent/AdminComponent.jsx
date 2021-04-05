import React, { useEffect, useState } from 'react';
import s from './AdminComponent.module.css'
import { connect } from 'react-redux';
import FormInput from '../../../components/form-input/FormInput';
import CustomButton from '../../../components/custom-button/CustomButton';
import { changeMaxNumberOfGuest, changeNewPrice,deleteRoom } from '../../../redux/user-reducer';
import { withRouter } from 'react-router';

const AdminComponent = (props) => {
    const [formData, handleFormData] = useState({
        numberOfGuestNew: '',
        roomPriceNew: '',

    })
    let [error, setError] = useState('');

    const handleChange = (event) => {
        let { value, id } = event.target;
        handleFormData({ ...formData, [id]: value });

    }
    const changeMaxNumberOfGuestForm = (e)=>{
        e.preventDefault();
        props.changeMaxNumberOfGuest(props.room.id,formData.numberOfGuestNew);
    }
    const changeNewPriceForm = (e)=>{
        e.preventDefault();
        props.changeNewPrice(props.room.id,formData.roomPriceNew);
    }
    const deleteRoomBTN = ()=>{
        props.deleteRoom(props.room.id)
        props.history.push('/')
    }

    return (
        <div>

            <form onSubmit={changeMaxNumberOfGuestForm}>
                <FormInput

                    type='number'
                    id='numberOfGuestNew'
                    value={formData.numberOfGuestNew}
                    changeSubmitData={handleChange}
                    label='New Max Number Of Guests'
                    required />
                <CustomButton >Change</CustomButton>
            </form>
            <form onSubmit={changeNewPriceForm}>
                <FormInput

                    type='number'
                    id='roomPriceNew'
                    value={formData.roomPriceNew}
                    changeSubmitData={handleChange}
                    label='New Price per Night'
                    required />
                <CustomButton>Change</CustomButton>


            </form>
            <div className={s.btnContainer}>
                <CustomButton onClick={()=>{deleteRoomBTN()}}>Delete This Room</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
    }
}

export default withRouter(connect(mapStateToProps, { changeMaxNumberOfGuest:changeMaxNumberOfGuest,changeNewPrice:changeNewPrice,deleteRoom:deleteRoom})(AdminComponent));