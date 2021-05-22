import {
  INITIAL_USER_STATE,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_ERROR
} from "./index";

export const initialUserState = payload => {
  return  {
    type: INITIAL_USER_STATE,
    payload
  }
}

export const postUserRequest = payload => {
  return  {
    type: POST_USER_REQUEST,
      payload
  }
}

export const postUserSuccess = payload => {
  return  {
    type: POST_USER_SUCCESS,
    payload
  }
}

export const postUserError = payload => {
  return  {
    type: POST_USER_ERROR,
    payload
  }
}

