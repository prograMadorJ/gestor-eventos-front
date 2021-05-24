import {
  INITIAL_EVENT_STATE,
  FINALLY_EVENT_REGISTER,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_ERROR,
  PUT_EVENT_REQUEST,
  PUT_EVENT_SUCCESS,
  PUT_EVENT_ERROR,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
  GET_EVENT_REQUEST,
  GET_EVENT_SUCCESS,
  GET_EVENT_ERROR,
  GET_EVENT_NOT_FOUND
} from "./index";

const createAction = (type, payload) => ({
  type,
  payload
})

export const initialEventState = payload => createAction(INITIAL_EVENT_STATE, payload)

export const finallyEventRegister = payload => createAction(FINALLY_EVENT_REGISTER, payload)

export const postEventRequest = payload => createAction(POST_EVENT_REQUEST, payload)

export const postEventSuccess = payload => createAction(POST_EVENT_SUCCESS, payload)

export const putEventRequest = payload => createAction(PUT_EVENT_REQUEST, payload)

export const putEventSuccess = payload => createAction(PUT_EVENT_SUCCESS, payload)

export const putEventError = payload => createAction(PUT_EVENT_ERROR, payload)

export const deleteEventRequest = payload => createAction(DELETE_EVENT_REQUEST, payload)

export const deleteEventSuccess = payload => createAction(DELETE_EVENT_SUCCESS, payload)

export const deleteEventError = payload => createAction(DELETE_EVENT_ERROR, payload)

export const postEventError = payload => createAction(POST_EVENT_ERROR, payload)

export const getEventRequest = payload => createAction(GET_EVENT_REQUEST, payload)

export const getEventSuccess = payload => createAction(GET_EVENT_SUCCESS, payload)

export const getEventError = payload => createAction(GET_EVENT_ERROR, payload)

export const getEventNotFound = payload => createAction(GET_EVENT_NOT_FOUND, payload)
