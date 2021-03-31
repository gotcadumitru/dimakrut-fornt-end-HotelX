import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import QrScanner from './components/QrCodeScanner/QrScanner';
import CheckIn from './pages/Checkpage/Check-in/CheckIn';
import CheckOut from './pages/Checkpage/Check-out/CheckOut';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/ProfilePages/Profile';
import RoomPage from './pages/RoomPage/RoomPage';
import Signinup from './pages/SignInUp/Signinup';
import { initializeApp } from './redux/app-reducer';

const App =(props) => {

  useEffect(async()=>{
    await props.initializeApp();

  },[])
  return (
    <div>
      <BrowserRouter>

      <Header/>

      <Route exact path='/' component={Homepage}/>
      <Route exact path='/checkin' component={CheckIn}/>
      <Route exact path='/checkout' component={CheckOut}/>
      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/sign' render={()=>props.userID ? (<Redirect to='/'/>) : (<Signinup/>) }/>
      <Route exact path='/rooms/:roomId' component={RoomPage}/>

      </BrowserRouter>

    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    userID: state.auth.userID, 
  }
}
export default connect(mapStateToProps,
            {
              initializeApp:initializeApp,
            })(App);
