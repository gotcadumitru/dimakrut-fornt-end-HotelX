import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children,inverted,disabled, ...otherProps})=>{
    return (
        <button className={`
        ${inverted ? 'inverted' : ''} 
        ${disabled ? 'disabled' : ''} 
        customButton`}
            
             {...otherProps}>{children }</button>
    );
}
export default CustomButton;