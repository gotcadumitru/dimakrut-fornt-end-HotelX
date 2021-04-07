import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from '../../redux/auth-reducer';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './signin.scss';



class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    changeSubmitData=(event)=>{
        let {value,name}=event.target;
        this.setState({[name]:value});

    }
    handleSubmit =async (event)=>{
        event.preventDefault();
        const {email,password} = this.state;
        this.props.login(email,password);
        this.setState({email:'',password:''})

    }
    render() {
        return(
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={(event)=>{this.handleSubmit(event)}}>
            <FormInput type="email" name="email" label="email" changeSubmitData = {this.changeSubmitData} value={this.state.email} required/>
            <FormInput type="password" name="password" label="password" changeSubmitData = {this.changeSubmitData} value={this.state.password}/>            

            {this.props.error.forLogin ===true && this.props.error.text ? <div className='error'>Error: {this.props.error.text}</div>:''}
            <div className='buttons'>
            <CustomButton type="submit" >Submit Form</CustomButton>
            </div>
            </form>
            </div>
            )
        }
    }

const mapstateToProps = (state)=>{
    return {
        error:state.auth.authError,
    }
}
export default connect(mapstateToProps,{login:login})(SignIn);