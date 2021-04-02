import React from 'react';
import { connect } from 'react-redux';
import AdminProfile from './AdminProfile/AdminProfile';
import AdminProfileContainer from './AdminProfile/AdminProfileContainer';
import CleanerProfileContainer from './CleanerProfile/CleanerProfileContainer';
import GuestProfileContainer from './GuestProfile/GuestProfileContainer';

const Profile = (props)=>{
    return (
        <div>
        {    props.user.drept === 'user' ? <GuestProfileContainer/> : '' }
        {    props.user.drept === 'admin' ? <AdminProfileContainer/> : '' }
        {    props.user.drept === 'cleaner' ? <CleanerProfileContainer/> : '' }
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        user: state.auth,
    }
}

export default connect(mapStateToProps,{})(Profile);