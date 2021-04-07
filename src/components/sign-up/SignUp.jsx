import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth-reducer';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignUp.scss'

const SignUp = (props) => {
    const [userData, setUserData] = useState(
        {
            nume: '',
            prenume: '',
            email: '',
            password: '',
            confirmPassword: '',
        });

    const handleChange = (event) => {
        let { value, name } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(userData.password !== userData.confirmPassword ){
            alert("Different password")
            return;
        }else{
            props.register(userData.email,userData.password,userData.nume,userData.prenume);
        }
        setUserData(
                {
                    nume: '',
                    prenume: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                })

    }
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type='text' name='nume' value={userData.nume} changeSubmitData={handleChange} label='Name' required />
                <FormInput type='text' name='prenume' value={userData.prenume} changeSubmitData={handleChange} label='Surname' required />
                <FormInput type='email' name='email' value={userData.email} changeSubmitData={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={userData.password} changeSubmitData={handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={userData.confirmPassword} changeSubmitData={handleChange} label='Confirm Password' required />
                {props.error.forLogin ===false && props.error.text ? <div className='error'>Error: {props.error.text}</div> : ''}

                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}


const mapstateToProps = (state)=>{
    return {
        error:state.auth.authError,

    }
}
export default connect(mapstateToProps,{register: register})(SignUp);