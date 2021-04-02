import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_ERROR = 'SET_AUTH_ERROR';

let initialState = {
  userID: null,
  email: null,
  name: null,
  surname: null,
  isAuth: false,
  roomID: null,
  drept: null,
  authError:{
    text: '',
    forLogin: null,
  },
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth,
      }
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: {
          text: action.error,
          forLogin: action.forLogin,
        },
      }

    default:
      return state;
  }
}

const setUserData = (userID,drept, email, name, surname,roomID, rentPeriod,isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      userID,
      email,
      name,
      surname,
      isAuth,
      drept,
      rentPeriod,
      roomID,
    }
  }
}
const setAuthError = (error,forLogin=false) => {
  return {
    type: SET_AUTH_ERROR,
    error,
    forLogin,
  }
}

export const getUserData = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if(user){
    let data = await authAPI.getUserData(user.email, user.password);
    if(data.data === 'incorect auth data'){
      logout();
    }
    else{
      let userData = data.data[0];
      let roomIDarr = data.data[1];
      const roomID = roomIDarr == false ? -1 : roomIDarr[0][3];
      const rentPeriod = roomID == -1 ? [] : [roomIDarr[0][0],roomIDarr[0][1]]

      const {drept,email,id,nume,prenume} = userData
      dispatch(setUserData(id,drept,email,nume,prenume,roomID,rentPeriod,true));

    }
    
  }
}

export const register = (email, password, nume, prenume) => async (dispatch) => {
  let resp = await authAPI.register(email, password, nume, prenume)
  if(resp.data === "allready registered email"){
    dispatch(setAuthError(resp.data,false));
  }else if(resp.data===true){
    dispatch(setAuthError(''));
    const userJSON = JSON.stringify({ email, password });
    localStorage.setItem('user', userJSON);
  }
  dispatch(getUserData());
}
export const login = (email, password) => async (dispatch) => {
  dispatch(setAuthError("",true))
  let isUser = await authAPI.login(email, password)
  if (isUser) {

    const userJSON = JSON.stringify({ email, password });
    localStorage.setItem('user', userJSON);
    dispatch(getUserData());
  }else{
    dispatch(setAuthError("Incorrect User Data",true))
  }
}
export const logout = () => async (dispatch) => {
  localStorage.removeItem('user');
  dispatch(setUserData(null, null, null, false));
}
export default authReducer;