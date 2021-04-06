import { connect } from "react-redux";
import {  clearRooms, getAllRooms } from "../../../redux/room-reducer";
import { addNewRoom ,SendEmail} from "../../../redux/user-reducer";
import { findTotalCapacity, findTotalGuestInotel, findTotalRoomPeriods, roomsTocleanSelector, } from "../../../redux/utils";
import AdminProfile from "./AdminProfile";








const mapStateToProps = (state)=>{
    return {
        user: state.auth,
        rooms: state.roomPage.rooms,
        totalRentPeriods: findTotalRoomPeriods(state.roomPage.rooms),
        totalGuestInHotel: findTotalGuestInotel(state.roomPage.rooms),
        totalCapacity: findTotalCapacity(state.roomPage.rooms),
        totalRoomsToClean: roomsTocleanSelector(state.roomPage.rooms).length
    }
}

export default connect(mapStateToProps,{SendEmail:SendEmail, getAllRooms:getAllRooms,addNewRoom:addNewRoom,clearRooms:clearRooms})(AdminProfile);