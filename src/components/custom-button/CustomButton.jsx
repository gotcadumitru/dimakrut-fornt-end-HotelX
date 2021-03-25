import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children,inverted, isGoogleSignIn, ...otherProps})=>{

    return (
        <button className={`
            ${inverted ? 'inverted' : ''} 
            ${isGoogleSignIn ? 'googleSignIn' : ''} customButton`}
             {...otherProps}>{children }</button>
    );
}
export default CustomButton;