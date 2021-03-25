import React, { useEffect } from 'react';
import { connect} from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CheckIn from './pages/Checkpage/Check-in/CheckIn';
import CheckOut from './pages/Checkpage/Check-out/CheckOut';
import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/ShopPage/Shoppage';
import Signinup from './pages/SignInUp/Signinup';
import { initializeApp } from './redux/app-reducer';
import { setCurrentUser } from './redux/user-reducer';

let Hats = ()=>{
  return (
    <div>Hats</div>
  )
}

const App =(props) => {

  useEffect(()=>{
    props.initializeApp();
  },)
  return (
    <div>

      <BrowserRouter>

      <Header/>

      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={Shoppage}/>
      <Route exact path='/checkin' component={CheckIn}/>
      <Route exact path='/checkout' component={CheckOut}/>
      <Route exact path='/sign' render={()=>props.currentUser ? (<Redirect to='/'/>) : (<Signinup/>) }/>
      <Route exact path='/shop/hats' component={Hats}/>

      </BrowserRouter>

    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    currentUser:state.user.currentUser,
  }
}
export default connect(mapStateToProps,
            {
              setCurrentUser:setCurrentUser,
              initializeApp:initializeApp,
            })(App);
