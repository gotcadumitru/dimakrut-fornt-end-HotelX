import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ShopItem from '../../components/shop-item/ShopitemComponent';
import s from './RoomPage.module.scss'

const RoomPage = (props) => {
    debugger
    return (
        <div className={s.RoomPagePage}>
            hello Rom Page
{/* {props.shopItemsState.map((el)=>{
        return (

            <ShopItem key={el.id} {...el}/>
            )
    })} */}
        </div>
    )
}

const RoomPageItem = ()=>{
    return(
        <div className={s.RoomPageItem}>

        </div>
    )
}





const mapStateToProps = (state)=>{
    return {
    }
}
export default withRouter(connect(mapStateToProps,{})(RoomPage));




