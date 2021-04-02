import { connect } from "react-redux";
import {  clearRooms, getAllRooms } from "../../../redux/room-reducer";
import { roomsTocleanSelector } from "../../../redux/utils";
import CleanerProfile from "./CleanerProfile";








const mapStateToProps = (state)=>{
    return {
        user: state.auth,
        roomsToClean: roomsTocleanSelector(state.roomPage.rooms),
    }
}

export default connect(mapStateToProps,{getAllRooms:getAllRooms,clearRooms:clearRooms})(CleanerProfile);