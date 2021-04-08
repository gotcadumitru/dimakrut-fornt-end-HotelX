import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import s from './Footer.module.css'

const Footer = (props) => {

    return (
        <div className={`${s.footer} footer`} >
            <div className={s.footerItem}>Contact US <span>+32445352341</span> | <span>Faebook</span> | <span>Instagram</span></div>
            <div className={s.footerItem}>© Copyright 2021 HotelX | Powered By: dimakrut Team</div>

        </div>
    )
}




const mapStateToProps = (state)=>{
    return {
        user:state.auth,
    }
}


export default connect(mapStateToProps,{logout})(Footer);