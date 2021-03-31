import { roomAPI } from "../api/api";


const SER_ROOMS = 'SER_ROOMS';
const CLEAR_ROOMS = 'CLEAR_ROOMS';
const GET_ONE_ROOM = 'GET_ONE_ROOM';
const HANDLE_BTN_SHOW = 'HANDLE_BTN_SHOW';


let initialState = {
  rooms:[],
  oneRoom: null,
  section: 1,
  numberOfRooms:null,
  isBtnShow: true,
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
    case HANDLE_BTN_SHOW:
      return {
        ...state,
        isBtnShow: action.isShow,        
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
const handleBTNShowAction =(isShow)=>{
  return {
    type: HANDLE_BTN_SHOW,
    isShow,
    }
}
export const setRooms = (numberOfRooms) =>async (dispatch,getState) => {
  const section = getState().roomPage.section;
  const rooms = await roomAPI.getRooms(section,numberOfRooms);
  if(rooms !== '[undefined]'){
    dispatch(setRoomsAction(rooms,section));
  }else if(rooms === '[undefined]'){
    dispatch(handleBTNShowAction(false));
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