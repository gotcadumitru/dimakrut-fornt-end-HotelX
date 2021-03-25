import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-item/cart-icon/CartIcon';
import CartDropDown from '../cart-item/CartDropDown/CartDropDown';
import Logo from './../../assets/images/logo.png'
import './Header.scss'

const Header = (props) => {
    const signOut = ()=>{
    }

    return (
        <div className="header">
            <Link to='/' className="logo-container">
            <img src={Logo} alt="2"/>
            </Link>

            <div className="options">
                <Link className="option" to='/'>{props.currentUser ? props.currentUser.displayName : '' }</Link>
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                { props.currentUser ? 
                <div onClick={signOut} className="option" to='/'>LOG Out</div>
                :
                <Link className="option" to='/sign'>LOG IN</Link>
            }
            <CartIcon/>
            {props.isCartDropDownShow && <CartDropDown/>}
            </div>
        </div>
    )
}




const mapStateToProps = (state)=>{
    return {
        currentUser:state.user.currentUser,
        isCartDropDownShow:state.cart.isCartDropDownShow,

    }
}


export default connect(mapStateToProps,)(Header);