import React from 'react';
import s from './CartItem.module.scss';

const CartItem = (props)=>{
    return (
        <div className={s.cartItem}>
            <img src={props.item.imageUrl} alt="cartimage"/>
            <div className={s.itemDetails}>
                <span className={s.name}>{props.item.name}</span>
                <span className={s.price}>{props.item.count} x ${props.item.price}</span>
            </div>
        </div>
    );
};
export default CartItem;

