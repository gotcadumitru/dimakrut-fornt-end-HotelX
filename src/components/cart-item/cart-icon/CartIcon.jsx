import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as CartItemIcon} from '../../../assets/images/shoppingbag.svg';
import { toggleCartDropDownShow } from '../../../redux/cart-reducer';
import { selectCartItemsCount } from '../../../selectors/cart-selector';

import s from './CartIcon.module.scss'

const CartIcon = (props)=>{
    return (
        <div onClick={props.toggleCartDropDownShow} className={s.cartIcon}>
            <CartItemIcon className={s.shoppingIcon} />
            <span className={s.itemCount}>{props.cartItemsCount}</span>
        </div>
    );
}
const mapStateToProps = ( state )=>{
    return {
        cartItemsCount: selectCartItemsCount(state),
    }
}

export default connect(mapStateToProps,{toggleCartDropDownShow,})(CartIcon);