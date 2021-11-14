import { combineReducers,createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import userReducers from './userReducer';
// import searchReducer from './search';
// import profileReducers from './profile'
import authReducer from './auth';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  //  users:userReducers,
  //  search:searchReducer,
   auth:authReducer,
  //  profile:profileReducers,

});

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools( applyMiddleware( ...middleware ) ));


export default store;