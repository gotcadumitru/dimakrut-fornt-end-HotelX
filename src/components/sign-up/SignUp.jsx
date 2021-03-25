import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth-reducer';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignUp.scss'

const SignUp = (props) => {
    const [userData, setUserData] = useState(
        {
            displayName: '',
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
            props.register(userData.email,userData.password,userData.displayName);
        }
        setUserData(
                {
                    displayName: '',
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
                <FormInput type='text' name='displayName' value={userData.displayName} changeSubmitData={handleChange} label='Display Name' required />
                <FormInput type='email' name='email' value={userData.email} changeSubmitData={handleChange} label='Email' required />
                <FormInput type='text' name='password' value={userData.password} changeSubmitData={handleChange} label='Password' required />
                <FormInput type='text' name='confirmPassword' value={userData.confirmPassword} changeSubmitData={handleChange} label='Confirm Password' required />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}


const mapstateToProps = (state)=>{
    return {

    }
}
export default connect(mapstateToProps,{register: register})(SignUp);