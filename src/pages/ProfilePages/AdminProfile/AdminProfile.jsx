import React, { useState } from 'react';
import CustomButton from '../../../components/custom-button/CustomButton';
import FormInput from '../../../components/form-input/FormInput';
import s from './AdminProfile.module.css';

const AdminProfile = (props)=>{
    
    const [newRoomData, setnewRoomData] = useState(
        {
            pret:'',
            clasa: '',
            nr_max_pers:'',
            poza1:'',
            poza2:'',
            poza3:'',
            poza4:'',
            facilitati:'',

        });

    const handleChange = (event) => {
        let { value, name } = event.target;
        setnewRoomData({ ...newRoomData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            props.addNewRoom(newRoomData.pret,newRoomData.clasa,newRoomData.nr_max_pers,newRoomData.poza1,newRoomData.poza2,newRoomData.poza3,newRoomData.poza4,newRoomData.facilitati);
            setnewRoomData(
                {
                    pret:'',
                    clasa: '',
                    nr_max_pers:'',
                    poza1:'',
                    poza2:'',
                    poza3:'',
                    poza4:'',
                    facilitati:'',
                })

    }
    return (

        <div className='sign-up'>
            <h2 className='title'>Add New Room</h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='number' name='pret' value={newRoomData.pret} changeSubmitData={handleChange} label='Price in Euro' required />
                <FormInput type='number' name='clasa' value={newRoomData.clasa} changeSubmitData={handleChange} label='0-SMALL | 1-MEDIUM | 2 BIG SIZE' required />
                <FormInput type='number' name='nr_max_pers' value={newRoomData.nr_max_pers} changeSubmitData={handleChange} label='Max Number of Guests' required />
                <FormInput type='text' name='poza1' value={newRoomData.poza1} changeSubmitData={handleChange} label='Image 1' required />
                <FormInput type='text' name='poza2' value={newRoomData.poza2} changeSubmitData={handleChange} label='Image 2' required />
                <FormInput type='text' name='poza3' value={newRoomData.poza3} changeSubmitData={handleChange} label='Image 3' required />
                <FormInput type='text' name='poza4' value={newRoomData.poza4} changeSubmitData={handleChange} label='Image 4' required />
                <FormInput type='text' name='facilitati' value={newRoomData.facilitati} changeSubmitData={handleChange} label='Facilities' required />
                <CustomButton type='submit'>Add new Room</CustomButton>
            </form>
        </div>
    )
}
export default AdminProfile