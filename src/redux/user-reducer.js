const SET_CURRENT_USER = 'SET_CURRENT_USER';
const initialState = {
    currentUser: null,
}

const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return  {
                ...state,
                currentUser: action.user,
            }
        default:
            return state

    }
}

export const setCurrentUserAction = (user)=>{
    return {
        type: SET_CURRENT_USER,
        user: user,
    }
}

export const setCurrentUser = (user) =>async (dispatch)=>{

    dispatch(setCurrentUserAction(user));

}

export default userReducer;