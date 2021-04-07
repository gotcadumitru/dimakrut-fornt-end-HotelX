import React, { useEffect, useState } from 'react';
import s from './AdminComponent.module.css'
import { connect } from 'react-redux';
import { changeMaxNumberOfGuest, changeNewPrice,deleteRoom ,changeNewFacilitati} from './../../redux/user-reducer';
import { withRouter } from 'react-router';
import Loader from '../Loader/Loader';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

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
        if(formData.numberOfGuestNew!=''){

            props.changeMaxNumberOfGuest(props.room.id,formData.numberOfGuestNew);
            setError('Date changed successfully')
            setTimeout(()=>{
                setError('')
            },3000)
            handleFormData({
                numberOfGuestNew: '',
                roomPriceNew: '',
                facilitNew: props.room.facilitati,
            })
        }
    }
    const changeNewPriceForm = (e)=>{
        e.preventDefault();
        if(formData.roomPriceNew!=''){
        props.changeNewPrice(props.room.id,formData.roomPriceNew);
        setError('Date changed successfully')
        setTimeout(()=>{
            setError('')
        },3000)
        handleFormData({
            numberOfGuestNew: '',
        roomPriceNew: '',
        facilitNew: props.room.facilitati,
        })
    }
    }
    const changeNewFacilitForm = (e)=>{
        e.preventDefault();
        if(formData.facilitNew!=''){
        props.changeNewFacilitati(props.room.id,formData.facilitNew);
        setError('Date changed successfully')
        setTimeout(()=>{
            setError('')
        },3000)
    }

    }
    const deleteRoomBTN = ()=>{
        props.deleteRoom(props.room.id)
        props.history.push('/')
    }
    // 
    if (!props.room) {
        return (
          <Loader/>
          )
      }

    return (
        <div>

            <form onSubmit={changeMaxNumberOfGuestForm}>
                <FormInput

                    type='number'
                    id='numberOfGuestNew'
                    value={formData.numberOfGuestNew}
                    changeSubmitData={handleChange}
                    label='New number of guests'
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
                    label='Specify facilities by comma'
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