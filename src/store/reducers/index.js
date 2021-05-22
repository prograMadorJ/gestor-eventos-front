import {combineReducers} from "redux";
import { userRegisterReducers } from './user-register-reducer'
import { eventRegisterReducers } from './event-register-reducer'

export const Reducers = combineReducers({
  userRegisterReducers,
  eventRegisterReducers
});
