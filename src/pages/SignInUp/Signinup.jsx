import React from 'react';
import SignIn from '../../components/sign-in/SignInComponent';
// import SignUp from '../../components/sign-up/SignUp';
import './Signinup.scss';
import hotelIMG from '../../assets/images/himage.png'



const Signinup=(props)=>{


    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            {/* <div class="himage">
                <img src={hotelIMG} alt="hotelimg"/>
            </div> */}
            <SignUp/>

        </div>
    )
}
export default Signinup;

