import { REGISTER_SUCCESS, REGISTER_FAIL , USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, DELETE_ACCOUNT} from '../actions/types'

const initalState = {
  isAuth:null,
  token: localStorage.getItem( 'token' ),
  loading:true,
  id:null,
  username:null,
  provider:null,
};


const auth =(state=initalState,action)=> {
  let {type, payload} = action
  console.log('action type',type)
  console.log('action type',payload)

  switch(type){
    case USER_LOADED:
      return{
        ...state,
        isAuth:true,
        loading:false,
        user:payload,
      };

    case "a":
      return{
        ...state,
        isAuth:true,
      };
    
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:      
        localStorage.setItem('token', payload.token);
        return {
            ...state,
            ...payload,
            isAuth: true,
            loading: false
        }
    case LOGOUT:
      localStorage.removeItem('token')
      return{
        ...state,
        token:null,
        isAuth:false,
        loading:false,
        id:null,
        username:null,
        provider:null,
      }
    
    default:
      return state
  }
}


export default auth