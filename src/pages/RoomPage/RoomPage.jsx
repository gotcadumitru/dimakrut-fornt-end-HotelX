import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ShopItem from '../../components/shop-item/ShopitemComponent';
import s from './RoomPage.module.scss'

const RoomPage = (props) => {
    const roomid = props.match.params.roomId
    debugger
    return (
        <div className={s.collectionPage}>
            <h2 className={s.title}>{props.title}</h2>
            <div className={s.items}>
                {/* {
                    props.items.map(item=>{
                        return 
                    })
                } */}
            </div>
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




