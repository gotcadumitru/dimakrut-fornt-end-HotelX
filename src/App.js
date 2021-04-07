import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/ProfilePages/Profile';
import RentPage from './pages/RentPage/RentPage';
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

      <Route exact path='/profile' component={Profile}/>
      <Route exact path='/rent' component={RentPage}/>
      <Route exact path='/sign' render={()=>props.userID ? (<Redirect to='/'/>) : (<Signinup/>) }/>
      <Route exact path='/rooms/:roomId' component={RoomPage}/>

      <Footer/>
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
