import React, {  useState } from 'react';
import CustomButton from '../../../components/custom-button/CustomButton';
import FormInput from '../../../components/form-input/FormInput';
import s from './Search.module.css'
const Search = (props)=>{
    const [dates , setDates] = useState({
        startDay: '',
        endDay:'',
        numberOfGuests:'',
    });

    const handleChange = (event) => {
        let { value, name } = event.target;
        // debugger
        setDates({ ...dates, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.getAllSelectedRooms(new Date(`${dates.startDay}T14:00:00`).getTime(),new Date(`${dates.endDay}T12:00:00`).getTime(),dates.numberOfGuests)
        
            setDates(
                {
                    startDay: '',
                    endDay:'',
                    numberOfGuests:'',
                })

    }
    

    return(
        <div className={s.searchInputs}>
                <form className={s.searchForm} onSubmit={(e)=>{handleSubmit(e)}} >
                Start Day:
                <FormInput
                    type='date'
                    name='startDay'
                    value={dates.startDay}
                    changeSubmitData={handleChange}
                    required />
                End Day:
                <FormInput
                    type='date'
                    name='endDay'
                    value={dates.endDay}
                    changeSubmitData={handleChange}
                    required />
                <FormInput
                    type='number'
                    name='numberOfGuests'
                    value={dates.numberOfGuests}
                    changeSubmitData={handleChange}
                    label='Number of Guests'
                    required />
                    <CustomButton>Search</CustomButton>
                </form>
            </div>
    );
} 

export default Search;
