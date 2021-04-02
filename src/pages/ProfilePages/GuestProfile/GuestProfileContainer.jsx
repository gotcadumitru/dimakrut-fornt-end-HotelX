import { connect } from "react-redux";
import { clearRooms, setRooms } from "../../../redux/room-reducer";
import { clearUserRoom, handleDoorStatus, setUserRoom } from "../../../redux/user-reducer";
import GuestProfile from "./GuestProfile";








const mapStateToProps = (state)=>{
    return {
        user: state.auth,
        rooms: state.roomPage.rooms,
        userRoom: state.user.userRoom,
    }
}

export default connect(mapStateToProps,{setUserRoom: setUserRoom, clearUserRoom:clearUserRoom,setRooms:setRooms,clearRooms:clearRooms,handleDoorStatus:handleDoorStatus})(GuestProfile);