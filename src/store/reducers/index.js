import {combineReducers} from "redux";
import { appReducer } from "./app-reducer";
import { userRegisterReducer } from './user-register-reducer'
import { eventRegisterReducer } from './event-register-reducer'
import { authReducer } from './auth-reducer'

export const Reducers = combineReducers({
  appReducer,
  authReducer,
  userRegisterReducer,
  eventRegisterReducer
});
