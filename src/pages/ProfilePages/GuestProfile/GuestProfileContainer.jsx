import { connect } from "react-redux";
import { withRouter } from "react-router";
import { clearRooms, setRooms } from "../../../redux/room-reducer";
import { cancelRent, clearUserRoom, handleDoorStatus, setUserRoom, userCheckInForReucer,userCheckOutForReucer } from "../../../redux/user-reducer";
import GuestProfile from "./GuestProfile";








const mapStateToProps = (state)=>{
    return {
        user: state.auth,
        rooms: state.roomPage.rooms,
        userRoom: state.user.userRoom,
    }
}

export default withRouter(connect(mapStateToProps,{
        setUserRoom: setUserRoom, 
        clearUserRoom:clearUserRoom,
        setRooms:setRooms,
        clearRooms:clearRooms,
        handleDoorStatus:handleDoorStatus,
        userCheckInForReucer:userCheckInForReucer,
        cancelRent:cancelRent,
        userCheckOutForReucer:userCheckOutForReucer,})(GuestProfile));