import { roomAPI } from "../api/api";

const SET_USER_ROOM = 'SET_USER_ROOM';

let initialState = {
  userRoom: null,
}


const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_ROOM:
      return {
        ...state,
        userRoom: {...action.room},
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

export const setUserRoom = (roomID) =>async (dispatch) => {
  if(roomID!==-1){
    const room = await roomAPI.getOneRoom(roomID);
    dispatch(setUserRoomAction(room));
  }else{
    
    const room = await roomAPI.getOneRoom(2);
    dispatch(setUserRoomAction(room));
  }
}
export const handleDoorStatus = (newDoorStatus,roomid) =>async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const resp = await roomAPI.changeRoomstatus(roomid,newDoorStatus,user.email, user.password);
  setUserRoom(roomid);

}



export default userReducer;