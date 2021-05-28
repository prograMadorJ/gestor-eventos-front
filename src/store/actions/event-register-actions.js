import * as types from "./index";

const createAction = (type, payload) => ({
  type,
  payload
})

export const initialEventState = payload => createAction(types.INITIAL_EVENT_STATE, payload)

export const finallyEventRegister = payload => createAction(types.FINALLY_EVENT_REGISTER, payload)

export const postEventRequest = payload => createAction(types.POST_EVENT_REQUEST, payload)

export const postEventSuccess = payload => createAction(types.POST_EVENT_SUCCESS, payload)

export const putEventRequest = payload => createAction(types.PUT_EVENT_REQUEST, payload)

export const putEventSuccess = payload => createAction(types.PUT_EVENT_SUCCESS, payload)

export const putEventError = payload => createAction(types.PUT_EVENT_ERROR, payload)

export const deleteEventRequest = payload => createAction(types.DELETE_EVENT_REQUEST, payload)

export const deleteEventSuccess = payload => createAction(types.DELETE_EVENT_SUCCESS, payload)

export const deleteEventError = payload => createAction(types.DELETE_EVENT_ERROR, payload)

export const postEventError = payload => createAction(types.POST_EVENT_ERROR, payload)

export const getEventRequest = payload => createAction(types.GET_EVENT_REQUEST, payload)

export const getEventSuccess = payload => createAction(types.GET_EVENT_SUCCESS, payload)

export const getEventError = payload => createAction(types.GET_EVENT_ERROR, payload)

export const getEventNotFound = payload => createAction(types.GET_EVENT_NOT_FOUND, payload)
