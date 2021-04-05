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
        setDates({ ...dates, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger
            props.addNewRoom(dates.startDay,dates.endDay,dates.numberOfGuests);
            setDates(
                {
                    startDay: '',
                    endDay:'',
                    numberOfGuests:'',
                })

    }
    

    return(
        <div className={s.searchInput}>
                <form className={s.searchForm} onSubmit={(e)=>{handleSubmit(e)}} >
                Start Day:
                <FormInput
                    type='date'
                    id='startDay'
                    value={dates.startDay}
                    changeSubmitData={handleChange}
                    required />
                End Day:
                <FormInput
                    type='date'
                    id='endDay'
                    value={dates.endDay}
                    changeSubmitData={handleChange}
                    required />
                <FormInput
                    type='number'
                    id='numberOfGuests'
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
