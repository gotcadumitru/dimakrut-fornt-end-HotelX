import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Loader from '../../components/Loader/Loader';
import RoomItem from '../../components/room-item/RoomItem';
import { getOneRoom } from '../../redux/room-reducer';
import s from './RoomPage.module.scss'
import RoomPageForm from './RoomPageForm/RoomPageForm';

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
    return <RoomItem imageUrl={props.room[key]} />
  }) : '';

  if (!props.room) {
    return (
      <Loader/>
      )
  }

  return (
    <div className={s.collectionPage}>
      <h2 className={s.title}>{props.title}</h2>

      {props.room
        ? roomItemImg
        : 'Inexistent room'}
      <div className={s.roomInfo}>
        <div className={s.roomItem}>
          <div className={s.loremText}>
            "The rooms at the <span>HotelX</span> are new, well-lit and inviting. Our reception staff will be <span>happy</span> to help you during your stay in <span>CityX</span>, suggesting itineraries, guided visits and some <span> good restaurants </span> in the historic centre.While you enjoy a cocktail by the <span> swimming pool </span> on the rooftop terrace, you will be stunned by the breathtaking view of the bay of Isola Bella. Here, during your summer stays, our bar serves traditional Sicilian <span> dishes, snacks and salads</span>."
          </div>
          <div className={s.aboutItems}>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Price per night:</span> <span className={s.aboutInfo}>${props.room.pret}</span>
            </div>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Max number of Persons:</span> <span className={s.aboutInfo}>{props.room.nr_max_pers}</span>
            </div>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Peroiade in care este ocupata:</span> <span className={s.aboutInfo}>{props.room.nr_max_pers}</span>
            </div>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Marimea camerei:</span> <span className={s.aboutInfo}>{props.room.clasa === 0 ? 'SMALL' : props.room.clasa === 1 ? 'MEDIUM' : props.room.clasa === 2 ? 'BIG' : ''} Size</span>
            </div>
            <div className={s.aboutItem}>
              <span className={s.aboutText}>Suma ce va trebui sa o achitati:</span> <span className={s.aboutInfo}>${daysToPay*props.room.pret}</span>
            </div>
          </div>
        </div>
        <div className={s.roomItem}>

          <RoomPageForm nr_max_pers={props.room.nr_max_pers} roomData={roomData} setRoomData={setRoomData} user={props.user} daysToPay={daysToPay} setDays={setDays} />
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
export default withRouter(connect(mapStateToProps, { getOneRoom: getOneRoom, })(RoomPage));




