import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from './types'
import { setAuthToken } from '../../utils/setAuthToken'


export const loadUser = () => async dispatch => {
  if (localStorage.token) {
      setAuthToken(localStorage.token)
  }

  try {
    console.log('userを取得しています')
      const res = await axios.get('/user')
      dispatch({
          type: USER_LOADED,
          payload: res.data
      })

  } catch (error) {
      dispatch({
          type: AUTH_ERROR
      }) 
  }
}

export const register = ({username,email,password}) => async dispatch =>{
  const body = {username,email,password}
  console.log(body,'body')
  try{
    const res = await axios.post('/signup',body)

    dispatch({
      type:REGISTER_SUCCESS,
      payload:res.data
    })

  }
  catch(error){
    console.log(error,'error');
    dispatch({
      type:REGISTER_FAIL
    })
  }
}

export const login = ({email,password}) => async dispatch =>{
  const body = {email,password}
  try{
    console.log(body,'body')
    const res = await axios.post('/login',body)
    dispatch({
      type:LOGIN_SUCCESS,
      payload:res.data
    })
  }catch(error){
    console.log(error,'error')
  }
}


export const logout = () => async dispatch => {
  console.log ('logout')
  dispatch({type:LOGOUT})
}