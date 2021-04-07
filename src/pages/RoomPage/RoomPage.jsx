import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loader from '../../components/Loader/Loader';
import MenuItem from '../../components/menu-item/MenuItem';
import { getOneRoom, userRentRoom } from '../../redux/room-reducer';
import {  handleDoorStatusCleaner } from '../../redux/user-reducer';
import AdminComponent from './AdminComponent/AdminComponent';
import CleanerComponent from './CleanerComponent/CleanerComponent';
import s from './RoomPage.module.scss'
import UserComponent from './UserComponent/UserComponent';

const RoomPage = (props) => {

  const roomid = props.match.params.roomId;


  const [daysToPay, setDays] = useState(0);

  const [roomData, setRoomData] = useState(
    {
      nrPersoane: '',
      startDay: '',
      endDay: '',
      payMethod: '',
    });

  useEffect(() => {
      props.getOneRoom(roomid);
    return () => {
    }
  }, [])

  
  const roomItemImg = props.room ? Object.keys(props.room).filter(el => {
    if (el.indexOf('poza') !== -1) {
      return true
    }
    return false
  }).map(key => {
    return <MenuItem forImages={true} key={key} id={roomid} poza={props.room[key]} />
  }) : '';

  let rentedPeriods;
  let rentedPeriodsSort;
  let rentedComponent;
  if(props.room){
    rentedPeriods = JSON.parse(props.room.rented);
    rentedPeriodsSort=rentedPeriods.sort((a,b)=>{
      
      return a[0]-b[0];
    })
    rentedComponent = rentedPeriods.map(item=>{
      const startDate = new Date(item[0]).toDateString();
      const endDate = new Date(item[1]).toDateString();
      return (
      <div className={s.aboutItem}>
        <span className={s.rented}>From : {startDate}</span> <span className={s.rented}>To: {endDate}</span>
      </div>)
      
    })
    
  }
  // debugger
  if (!props.room) {
    return (
      <Loader/>
      )
  }
  // debugger
  let roomStaus;
  if(props.room.cleaned === 0){
    roomStaus = 'Needs to be cleaned'
  }else if(props.room.cleaned === 1 && props.room.checked_in===1){
    roomStaus = 'Lives in it';
  }else if(props.room.cleaned === 1 && props.room.checked_in===0){
    roomStaus = 'Waiting for guests';
  }else{
    roomStaus = 'Wait';
  }
  return (
    <div className={s.collectionPage}>
      <h2 className={s.title}>{props.title}</h2>

      {props.room
        ? roomItemImg
        : 'Inexistent room'}
         <div className={s.loremText}>
            "The rooms at the <span>HotelX</span> are new, well-lit and inviting. Our reception staff will be <span>happy</span> to help you during your stay in <span>CityX</span>, suggesting itineraries, guided visits and some <span> good restaurants </span> in the historic centre.While you enjoy a cocktail by the <span> swimming pool </span> on the rooftop terrace, you will be stunned by the breathtaking view of the bay of Isola Bella. Here, during your summer stays, our bar serves traditional Sicilian <span> dishes, snacks and salads</span>."
          </div>
      <div className={s.roomInfo}>

      <div className={s.roomItem}>
      
      {props.user.drept == "cleaner" 
      ? <CleanerComponent 
          getOneRoom={props.getOneRoom} 
          room={props.room}
          endDate={ rentedPeriods.length > 0 ? rentedPeriodsSort[0][1]: 0}/> 
        : props.user.drept == "admin" ? <AdminComponent
        room={props.room}/>
        : <UserComponent 
        userRentRoom={props.userRentRoom} 
        rentPeriods={rentedPeriods ? rentedPeriods : []}  
        nr_max_pers={props.room.nr_max_pers} 
        roomData={roomData} 
        setRoomData={setRoomData} 
        user={props.user} 
        daysToPay={daysToPay} 
        setDays={setDays} 
        roomid={roomid}/>
        
        

      }
        </div>
        <div className={s.roomItem}>
          <div className={s.aboutItems}>
           { props.user.drept == "cleaner" ?
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Room Status:</span> <span className={s.aboutInfo}>{roomStaus}</span>
            </div> : ''}
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Room Number:</span> <span className={s.aboutInfo}>{props.room.id}</span>
            </div>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Price per night:</span> <span className={s.aboutInfo}>€{props.room.pret}</span>
            </div>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Maximum guest:</span><span className={s.aboutInfo}>{props.room.nr_max_pers}</span>
            </div>
            {rentedPeriods.length>0 && <div className={s.aboutItem}>
              <span className={s.aboutText}>Reserved periods:</span> <span className={s.aboutInfo}>{rentedPeriods ? rentedPeriods.length : '0'}</span>
            </div>}
            {rentedComponent}
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Room size:</span> <span className={s.aboutInfo}>{props.room.clasa === 0 ? 'SMALL' : props.room.clasa === 1 ? 'MEDIUM' : props.room.clasa === 2 ? 'BIG' : ''} Size</span>
            </div>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Facilities:</span> <span className={s.aboutInfo}>{props.room.facilitati.split(',').map(item=><div>{item}</div>)} </span>
            </div>
            {props.user.drept == "cleaner" 
            ? ''
            :<div className={s.aboutItem}>
              <span className={s.aboutText}>Amount to pay:</span> <span className={s.aboutInfo}>€{daysToPay*props.room.pret}</span>
            </div>}
          </div>
        </div>
   
      </div>


    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    room: state.roomPage.oneRoom,
    user: state.auth,
  }
}
export default withRouter(connect(mapStateToProps, { 
  getOneRoom: getOneRoom, 
  userRentRoom: userRentRoom,
  handleDoorStatusCleaner:handleDoorStatusCleaner
})(RoomPage));