import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userID: null,
  email: null,
  name: null,
  surname: null,
  isAuth: false,
  roomID: null,
  drept: null,
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth,
      }

    default:
      return state;
  }
}

const setUserData = (userID,drept, email, name, surname,roomID, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      userID,
      email,
      name,
      surname,
      isAuth,
      drept,
      roomID,
    }
  }
}

export const getUserData = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if(user){
    let data = await authAPI.getUserData(user.email, user.password);
    if(data.data === 'incorect auth data'){
      logout();
    }
    else{
      let [userData,roomID] = data.data;
      roomID = roomID == false ? -1 : roomID;

      const {drept,email,id,nume,prenume} = userData
      dispatch(setUserData(id,drept,email,nume,prenume,roomID,true));

    }
    
  }
}

export const register = (email, password, nume, prenume) => async (dispatch) => {
  let resp = await authAPI.register(email, password, nume, prenume)
  if(resp.data===true){
    const userJSON = JSON.stringify({ email, password });
    localStorage.setItem('user', userJSON);
  }
  dispatch(getUserData());
}
export const login = (email, password) => async (dispatch) => {
  let isUser = await authAPI.login(email, password)
  if (isUser) {
    const userJSON = JSON.stringify({ email, password });
    localStorage.setItem('user', userJSON);
  }
  dispatch(getUserData());
}
export const logout = () => async (dispatch) => {
  localStorage.removeItem('user');
  dispatch(setUserData(null, null, null, false));
}
export default authReducer;