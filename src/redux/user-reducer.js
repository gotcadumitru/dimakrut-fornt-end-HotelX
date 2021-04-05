import { roomAPI } from "../api/api";
import { getUserData } from "./auth-reducer";
import { getOneRoom } from "./room-reducer";

const SET_USER_ROOM = 'SET_USER_ROOM';
const CLEAR_USER_ROOM = 'CLEAR_USER_ROOM';

let initialState = {
  userRoom: null,
}


const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_ROOM:
      return {
        ...state,
        userRoom: {
          ...action.room,
        },
      }
    case CLEAR_USER_ROOM:
      return {
        ...state,
        userRoom: null,
      }

    default:
      return state;
  }
}

const setUserRoomAction = (room) => {
  return {
  type: SET_USER_ROOM,
  room,
  }
}
const clearUserRoomAction = () => {
  return {
  type: CLEAR_USER_ROOM,
  }
}

export const setUserRoom = (roomID) =>async (dispatch) => {
  if(roomID!==-1){
    const room = await roomAPI.getOneRoom(roomID);
    // debugger
    dispatch(setUserRoomAction(room));
  }else{

  }
}
export const handleDoorStatus = (newDoorStatus,roomId) =>async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const resp = await roomAPI.changeDoorStatus(roomId,newDoorStatus,user.email, user.password);
  setUserRoom(roomId)(dispatch);

}
export const handleDoorStatusCleaner = (newDoorStatus,roomId) =>async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const resp = await roomAPI.changeDoorStatus(roomId,newDoorStatus,user.email, user.password);
  getOneRoom(roomId)(dispatch);

}
export const userCheckInForReucer = (roomId) =>async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const resp = await roomAPI.userCheckIn(user.email, user.password,roomId);
  if(resp){
    setUserRoom(roomId)(dispatch);
  }

}
export const userCheckOutForReucer = (roomId) =>async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const resp = await roomAPI.userCheckOut(user.email, user.password,roomId);
  if(resp){
    getUserData()(dispatch)
  }

}
export const cleanRoomForReducer = (roomId) =>async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const resp = await roomAPI.cleanRoom(user.email, user.password,roomId);
  if(resp){
    getOneRoom(roomId)(dispatch)
  }

}
export const clearUserRoom = () =>async (dispatch) => {

  dispatch(clearUserRoomAction());
}



export default userReducer;