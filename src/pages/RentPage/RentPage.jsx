import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUserData } from '../../redux/auth-reducer';
import s from './RentPage.module.css';

const RentPage = (props)=>{
    useEffect(()=>{
        props.getUserData();
    },[])
    if(props.rentStatus === 'The reservation was made successfully, in 10 seconds you will be redirected to the main page, you can find the reservation details in the profile page'){
        setTimeout(()=>{
            props.history.push(`/`);
        },10000);
    }
    return (
        <div className={s.rentPage}>
                {props.rentStatus === '' ? ''
                :
                <h2 className={s.rentStatus}>{props.rentStatus}</h2>
                
                }
        </div>
    )
}
const mapStateToProps =(state)=>{
    return {
        rentStatus: state.roomPage.rentStatus,
    }
}
export default withRouter(connect(mapStateToProps,{getUserData:getUserData})(RentPage));