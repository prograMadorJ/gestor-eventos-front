import * as types from "./index";

const createAction = (type, payload) => ({
  type,
  payload
})

export const initialUserState = payload => createAction(types.INITIAL_USER_STATE, payload)

export const finallyUserRegister = payload => createAction(types.FINALLY_USER_REGISTER, payload)

export const postUserRequest = payload => createAction(types.POST_USER_REQUEST, payload)

export const postUserSuccess = payload => createAction(types.POST_USER_SUCCESS, payload)

export const postUserError = payload => createAction(types.POST_USER_ERROR, payload)

export const postUserConflict = payload => createAction(types.POST_USER_CONFLICT, payload)

export const putUserRequest = payload => createAction(types.PUT_USER_REQUEST, payload)

export const putUserSuccess = payload => createAction(types.PUT_USER_SUCCESS, payload)

export const putUserError = payload => createAction(types.PUT_USER_ERROR, payload)

export const putUserConflict = payload => createAction(types.PUT_USER_CONFLICT, payload)

export const deleteUserRequest = payload => createAction(types.DELETE_USER_REQUEST, payload)

export const deleteUserSuccess = payload => createAction(types.DELETE_USER_SUCCESS, payload)

export const deleteUserError = payload => createAction(types.DELETE_USER_ERROR, payload)

export const getUserRequest = payload => createAction(types.GET_USER_REQUEST, payload)

export const getUserSuccess = payload => createAction(types.GET_USER_SUCCESS, payload)

export const getUserError = payload => createAction(types.GET_USER_ERROR, payload)

export const getUserNotFound = payload => createAction(types.GET_USER_NOT_FOUND, payload)

export const getUserHasEvents = payload => createAction(types.GET_USER_HAS_EVENTS, payload)

