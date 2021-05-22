import {
  SET_TITLE_HEADER_APP
} from "../actions";

const initialState = {
  headerTitle: 'Home'
};

function setTitleHeaderApp(payload) {
  return {
      headerTitle: payload.headerTitle
    }
}


export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE_HEADER_APP:
      return {...state, ...setTitleHeaderApp(action.payload)}
    default:
      return state;
  }
};
