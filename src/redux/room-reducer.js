import { roomAPI } from "../api/api";
import { getUserData} from "./auth-reducer";


const SER_ROOMS = 'SER_ROOMS';
const CLEAR_ROOMS = 'CLEAR_ROOMS';
const GET_ONE_ROOM = 'GET_ONE_ROOM';
const HANDLE_BTN_SHOW = 'HANDLE_BTN_SHOW';
const SET_RENT_STATUS = 'SET_RENT_STATUS';


let initialState = {
  rooms:[],
  oneRoom: null,
  section: 1,
  numberOfRooms:null,
  isBtnShow: true,
  rentStatus: '',
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
    case SET_RENT_STATUS:
        return {
        ...state,
        rentStatus: action.rentStatus,        
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
const setRentStatusAction = (rentStatus) => {
  return {
  type: SET_RENT_STATUS,
  rentStatus,
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
    dispatch(setRoomsAction(rooms));
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
export const userRentRoom = (startDay,endDay,userId,roomId) =>async (dispatch) => {
  dispatch(setRentStatusAction('Wait, the reservation is being executed'));
  const user = JSON.parse(localStorage.getItem('user'))
  if(user){
    let data = await roomAPI.userRentRoom(user.email,user.password,startDay,endDay,userId,roomId);
    if(data.data===true){
      dispatch(setRentStatusAction('The reservation was made successfully, in 10 seconds you will be redirected to the main page, you can find the reservation details in the profile page'));
    }else{
      dispatch(setRentStatusAction('A fost intampinata o eroare, va rugam sa mai incercati o data sa bronati camera'));
    }
  }
}
export const getAllRooms = () =>async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if(user){
    let rooms = await roomAPI.getAllRoomsAPI();
    dispatch(setRoomsAction(rooms));
  }
}



export default roomReducer;