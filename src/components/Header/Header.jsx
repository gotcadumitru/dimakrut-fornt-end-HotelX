import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/auth-reducer';
import Logo from './../../assets/images/logo.png'
import './Header.scss'

const Header = (props) => {
    const signOut = ()=>{
        props.logout();
    }

    return (
        <div className="header">
            <Link to='/' className="logo-container">
            <img src={Logo} alt="2"/>
            </Link>

            <div className="options">
                <Link className="option" to='/profile'>{props.user ? props.user.name : '' }</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                { props.user.userID ? 
                <Link onClick={signOut} to='/' className="option">Log Out</Link>
                :
                <Link className="option" to='/sign'>LOG IN</Link>
            }
            </div>
        </div>
    )
}




const mapStateToProps = (state)=>{
    return {
        user:state.auth,
    }
}


export default connect(mapStateToProps,{logout})(Header);