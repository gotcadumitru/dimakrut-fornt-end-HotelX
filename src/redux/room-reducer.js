import { roomAPI } from "../api/api";


const SER_ROOMS = 'SER_ROOMS';
const CLEAR_ROOMS = 'CLEAR_ROOMS';
const GET_ONE_ROOM = 'GET_ONE_ROOM';
let initialState = {
  rooms:[],
  oneRoom: null,
}


const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SER_ROOMS:
      return {
        ...state,
        rooms: [...state.rooms, ...action.rooms],
      }
    case CLEAR_ROOMS:
      return {
        ...state,
        rooms: [],
      }
    case GET_ONE_ROOM:
      return {
        ...state,
        oneRoom: state.rooms.find(room => room.id==action.roomId),
      }

    default:
      return state;
  }
}

const setRoomsAction = (rooms) => {
  return {
  type: SER_ROOMS,
  rooms: [...rooms],
  }
}
const clearRoomsAction = () => {
  return {
  type: CLEAR_ROOMS,
  }
}
const getOneRoomAction = (roomid) => {
  return {
  type: GET_ONE_ROOM,
  roomId: roomid,
  }
}
export const setRooms = () =>async (dispatch) => {
  const rooms = await roomAPI.getRooms();
  if(rooms){
    dispatch(setRoomsAction(rooms));
  }
}
export const clearRooms = () =>async (dispatch) => {
    dispatch(clearRoomsAction());
}
export const getOneRoom = (roomid) =>async (dispatch) => {
    dispatch(getOneRoomAction(roomid));
}



export default roomReducer;