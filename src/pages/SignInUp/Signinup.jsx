import React from 'react';
import SignIn from '../../components/sign-in/SignInComponent';
import SignUp from '../../components/sign-up/SignUp';
import './Signinup.scss';



const Signinup=(props)=>{


    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp/>

        </div>
    )
}
export default Signinup;

