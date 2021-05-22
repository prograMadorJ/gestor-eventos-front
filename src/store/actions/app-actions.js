import {
  SET_TITLE_HEADER_APP
} from "./index";

const createAction = (type, payload) => ({
  type,
  payload
})

export const setTitleHeaderApp = payload => createAction(SET_TITLE_HEADER_APP, {headerTitle: payload})

