import React from 'react';
import './forminput.scss';

const FormInput = ({changeSubmitData,label, ...otherProps})=>{
    // 
    return (
        <div className={`group ${otherProps.checkRoomInput ? 'checkroom' : ''}`}>
            <input className="form-input" onChange={changeSubmitData} {...otherProps}/>
            {label ? 
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >{label}</label>
            : null}
        </div>
    )
};
export default FormInput