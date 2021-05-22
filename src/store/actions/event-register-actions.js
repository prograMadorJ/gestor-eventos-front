import {
  INITIAL_EVENT_STATE,
  FINALLY_EVENT_REGISTER,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_ERROR
} from "./index";

const createAction = (type, payload) => ({
  type,
  payload
})

export const initialEventState = payload => createAction(INITIAL_EVENT_STATE, payload)

export const finallyEventRegister = payload => createAction(FINALLY_EVENT_REGISTER, payload)

export const postEventRequest = payload => createAction(POST_EVENT_REQUEST, payload)

export const postEventSuccess = payload => createAction(POST_EVENT_SUCCESS, payload)

export const postEventError = payload => createAction(POST_EVENT_ERROR, payload)

