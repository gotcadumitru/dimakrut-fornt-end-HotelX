import React from 'react';
import { connect } from 'react-redux';
import { deleteCartItem } from '../../../redux/cart-reducer';
import { selectCartItems, selectCartTotal } from '../../../selectors/cart-selector';
import s from './CheckIn.module.scss'

const CheckIn = (props) => {
    return (
        <div className={s.checkInPage}>
            <div className={s.checkInHeader}>
                <div className={s.headerBlock}>
                    <span>Product</span>
                </div>
                <div className={s.headerBlock}>
                    <span>Description</span>
                </div>
                <div className={s.headerBlock}>
                    <span>Name</span>
                </div>
                <div className={s.headerBlock}>
                    <span>Price </span>
                </div>
                <div className={s.headerBlock}>
                    <span>Remove</span>
                </div>
            </div>
            {props.cartItems.map(cartItem =>{
                return <CheckInItem key={cartItem.id} deleteCartItem={props.deleteCartItem} cartItem={cartItem}/>
            })}

            <div className={s.total}>
                <span>TOTAL: ${props.totalPrice}</span>
            </div>
        </div>
    )
}

const CheckInItem = ({cartItem:{name,imageUrl,id,price,description},deleteCartItem})=>{
    return(
        <div className={s.checkInItem}>
        <div className={s.imageContainer}>
            <img src={imageUrl} alt="Itemimg"/>

        </div>
        <span className={s.description}>{description}Desc</span>
        <span className={s.name}>{name}</span>
        <span className={s.price}>{price}</span>
        <div onClick={()=>{deleteCartItem(id)}} className={s.removeButton}>&#10005;</div>
        </div>
    )
}





const mapStateToProps = (state)=>{
    return {
        cartItems: selectCartItems(state),
        totalPrice: selectCartTotal(state),
    }
}
export default connect(mapStateToProps,{deleteCartItem,})(CheckIn);




