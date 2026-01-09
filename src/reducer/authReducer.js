import * as types from "../constant/actionTypes";

const initialState = {
  userList: []
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    default:
      return state;
  }
};
