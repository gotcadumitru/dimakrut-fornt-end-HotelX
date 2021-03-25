import React from 'react';
import CustomButton from '../../custom-button/CustomButton';
import s from './CartDropDown.module.scss';
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';
import { selectCartItems } from '../../../selectors/cart-selector';
import { toggleCartDropDownShow } from '../../../redux/cart-reducer';
import { withRouter } from 'react-router';



const CartDropDown = (props)=>{
    const items = props.cartItems.map(item =><CartItem key={item.id} item={item}/>)
    return (
        <div className={s.cartDropdown}>
            <div className={s.cartItems}>
                {
                    items.length ? items : <span className={s.emptyMessage}>Your cart is empty</span>}
            </div>
            <CustomButton  onClick={()=>{props.toggleCartDropDownShow(); props.history.push('/checkin')}}>GO TO CHECKIN</CustomButton>
        </div>
    )
}
const mapStateToProps = ( state )=>{
    return {
        cartItems: selectCartItems(state),
    }
}

export default withRouter(connect(mapStateToProps,{toggleCartDropDownShow,})(CartDropDown));