import { connect } from "react-redux";
import { withRouter } from "react-router";
import {  clearRooms, getAllRooms } from "../../../redux/room-reducer";
import { roomsTocleanSelector } from "../../../redux/utils";
import CleanerProfile from "./CleanerProfile";








const mapStateToProps = (state)=>{
    return {
        rooms: state.roomPage.rooms,
        user: state.auth,
        roomsToClean: roomsTocleanSelector(state.roomPage.rooms),
    }
}

export default withRouter(connect(mapStateToProps,{getAllRooms:getAllRooms,clearRooms:clearRooms})(CleanerProfile));