import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Register from './component/Auth/Register'
import Login from './component/Auth/Login';
import NotFound from './component/NotFound'
import Home from './component/Main/Home';
import {setAuthToken} from  './utils/setAuthToken'
import React, {useEffect, Fragment,useLayoutEffect} from 'react'
import store from "./redux/reducers/index";
import Navigationbar from './component/Footer/Navbar'
import Search from './component/Search/Form'
import Profile from './component/Profile/Profile'


const a = () => async dispatch =>{
  dispatch({
    type: "a",
})
}

if (localStorage.token) {
  console.log('localStorage',localStorage)
  store.dispatch(a())
  console.log('ローカルストレージ')
  setAuthToken(localStorage.token)
}


function App() {
  
  return (
      <BrowserRouter>
        <Fragment>
          <Navigationbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/search" element={<Search/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>    
        </Fragment>
      </BrowserRouter>
  );
}

export default App;
