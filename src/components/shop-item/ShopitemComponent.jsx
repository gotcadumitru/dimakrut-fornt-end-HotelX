import React from 'react';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart-reducer';
import CustomButton from '../custom-button/CustomButton';
import './Shopitem.scss';

const Shopitem = ({title,items,addCartItem})=>{
    return (
        <div className='collectionPreview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.filter((itm,ind)=> ind<4).map(el=>{
                    return (
                        <ShopItemComponent addCartItem={addCartItem} key={el.id} item={el}/>
                    )
                })}
            </div>
        </div>
    )
}

const ShopItemComponent = (props)=>{
    return (
        <div className='collectionItem'>
            <div style={{
                    backgroundImage: `url(${props.item.imageUrl})`,
                }}
                className='image'>
            </div>
            <div className='collectionFooter'>
                <div className='name'>{props.item.name}</div>
                <div className='price'>${props.item.price}</div>
            </div>
            <CustomButton onClick={()=>props.addCartItem(props.item)} inverted >ADD TO CART</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {

    }
}
export default connect(mapStateToProps,{addCartItem,})(Shopitem)