import React,{useState,Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import Landing from './Landing'
import Root from './Root'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'blue',
    padding:'3%',
    display: "flex",
    flexWrap: "wrap",
  },
  paper: {
    padding: theme.spacing(2),
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
  },
}));


const Home = (children) => {
  console.log('children',children)
  const classes = useStyles();
  const isAuth = useSelector(state=>state.auth.isAuth)
  //Rootコンポーネントに描画する子要素があるか判定
  const content = Object.keys(children).length === 0 && children.constructor === Object;
  
  return (
    <Fragment>
    {/* ログイン後の'/'の画面 */}
    {isAuth&& content &&(
      <Root/>
    )}
    {/* ログイン後の'/'以外の画面 */}
    {isAuth && !content&&(
      <Fragment>{children}</Fragment>      
    )}

    {/* ログイン前の画面 */}
    {!isAuth&& content&&(
      <Landing/>
    )}
    </Fragment>
  )
}

export default Home




