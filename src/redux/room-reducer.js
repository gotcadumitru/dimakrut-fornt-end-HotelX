import { roomAPI } from "../api/api";


const SER_ROOMS = 'SER_ROOMS';
const CLEAR_ROOMS = 'CLEAR_ROOMS';
const GET_ONE_ROOM = 'GET_ONE_ROOM';

let initialState = {
  rooms:[],
  oneRoom: null,
  section: 1,
  numberOfRooms:null,
}

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case SER_ROOMS:
      return {
        ...state,
        rooms: [...state.rooms, ...action.rooms],
        section: state.section+1,

      }
    case CLEAR_ROOMS:
      return {
        ...state,
        rooms: [],
        section: 1,

      }
    case GET_ONE_ROOM:
      return {
        ...state,
        oneRoom: action.roomId,
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
export const setRooms = (numberOfRooms) =>async (dispatch,getState) => {
  const section = getState().roomPage.section;
  const rooms = await roomAPI.getRooms(section,numberOfRooms);
  if(rooms){
    dispatch(setRoomsAction(rooms,section));
  }
}
export const clearRooms = () =>async (dispatch) => {
    dispatch(clearRoomsAction());
}
export const getOneRoom = (roomid) =>async (dispatch) => {
    const oneRoom = await roomAPI.getOneRoom(roomid);
    dispatch(getOneRoomAction(oneRoom));
}



export default roomReducer;