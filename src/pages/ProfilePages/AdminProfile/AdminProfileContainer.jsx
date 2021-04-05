import { connect } from "react-redux";
import {  getAllRooms } from "../../../redux/room-reducer";
import { addNewRoom } from "../../../redux/user-reducer";
import AdminProfile from "./AdminProfile";








const mapStateToProps = (state)=>{
    return {
        user: state.auth,
        rooms: state.roomPage.rooms,
    }
}

export default connect(mapStateToProps,{getAllRooms:getAllRooms,addNewRoom:addNewRoom})(AdminProfile);