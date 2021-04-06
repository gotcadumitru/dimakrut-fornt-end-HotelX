import React, { useEffect, useState } from 'react';
import s from './AdminComponent.module.css'
import { connect } from 'react-redux';
import FormInput from '../../../components/form-input/FormInput';
import CustomButton from '../../../components/custom-button/CustomButton';
import { changeMaxNumberOfGuest, changeNewPrice,deleteRoom ,changeNewFacilitati} from '../../../redux/user-reducer';
import { withRouter } from 'react-router';

const AdminComponent = (props) => {
    const [error,setError] = useState('');
    const [formData, handleFormData] = useState({
        numberOfGuestNew: '',
        roomPriceNew: '',
        facilitNew: props.room.facilitati,

    });
    // useEffect(()=>{
    //     handleFormData({...formData, facilitNew: props.room.facilitati});
    // },[props.room.facilitati])

    const handleChange = (event) => {
        let { value, id } = event.target;
        handleFormData({ ...formData, [id]: value });

    }
    const changeMaxNumberOfGuestForm = (e)=>{
        e.preventDefault();
        setError('Succes')
        props.changeMaxNumberOfGuest(props.room.id,formData.numberOfGuestNew);
        setTimeout(()=>{
            setError('')
        },3000)
        handleFormData({
            numberOfGuestNew: '',
        roomPriceNew: '',
        })
    }
    const changeNewPriceForm = (e)=>{
        e.preventDefault();
        setError('Succes')
        props.changeNewPrice(props.room.id,formData.roomPriceNew);
        setTimeout(()=>{
            setError('')
        },3000)
        handleFormData({
            numberOfGuestNew: '',
        roomPriceNew: '',
        })
    }
    const changeNewFacilitForm = (e)=>{
        e.preventDefault();
        setError('Succes')
        props.changeNewFacilitati(props.room.id,formData.facilitNew);
        setTimeout(()=>{
            setError('')
        },3000)

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
            <form onSubmit={changeNewFacilitForm}>
                <FormInput

                    type='text'
                    id='facilitNew'
                    value={formData.facilitNew}
                    changeSubmitData={handleChange}
                    label='Facilities specified by comma'
                    required />

                <CustomButton>Change</CustomButton>


            </form>
            <div className={s.btnContainer}>
                <CustomButton onClick={()=>{deleteRoomBTN()}}>Delete This Room</CustomButton>
            </div>
            <div>{error}</div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth,
    }
}

export default withRouter(connect(mapStateToProps, { changeNewFacilitati:changeNewFacilitati, changeMaxNumberOfGuest:changeMaxNumberOfGuest,changeNewPrice:changeNewPrice,deleteRoom:deleteRoom})(AdminComponent));