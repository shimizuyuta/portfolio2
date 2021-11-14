import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Register from './component/Register'
import Login from './component/Login';
import NotFound from './component/NotFound'
import Home from './component/Home';
import {setAuthToken} from  './utils/setAuthToken'
import React, {useEffect, Fragment,useLayoutEffect} from 'react'
import store from "./redux/reducers/index";
import {useSelector } from 'react-redux';
import Navigationbar from './component/Navbar'
import Landing from './component/Landing';

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
  const auth = useSelector(state=>state)
  return (
      <BrowserRouter>
        <Fragment>
          <Navigationbar/>
          <Routes>
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>    
        </Fragment>
      </BrowserRouter>
  );
}

export default App;
