import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CustomButton from '../../components/custom-button/CustomButton';
import RoomItem from '../../components/room-item/RoomItem';
import { getOneRoom } from '../../redux/room-reducer';
import s from './RoomPage.module.scss'
import RoomPageForm from './RoomPageForm/RoomPageForm';

const RoomPage = (props) => {
    const roomid = props.match.params.roomId
    useEffect(() => {
      props.getOneRoom(roomid)
      return () => {
      }
    }, [])
    const roomItemImg = props.room ? Object.keys(props.room).filter(el=>{
      if(el.indexOf('poza')!==-1){
        return true
      }
      return false
    }).map(key=>{
          return  <RoomItem imageUrl={props.room[key]}/>
    }
    ) : '';
    return (
        <div className={s.collectionPage}>
            <h2 className={s.title}>{props.title}</h2>
            
    
                {props.room 
                ? roomItemImg
                : 'Inexistent room'}

                  <RoomPageForm/>
        </div>
    )
}




const mapStateToProps = (state)=>{
    return {
      room: state.roomPage.oneRoom,
    }
}
export default withRouter(connect(mapStateToProps,{getOneRoom:getOneRoom,})(RoomPage));




