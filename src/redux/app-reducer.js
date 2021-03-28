import { getUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
let initialState = {
  initialized: false,
}


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }

    default:
      return state;
  }
}

const initializedSuccess = () => {
  return {
  type: INITIALIZED_SUCCESS,
  }
}

export const initializeApp = () =>async (dispatch) => {
  const promise = dispatch(getUserData())
  await Promise.all([promise])
  dispatch(initializedSuccess())
}



export default appReducer;