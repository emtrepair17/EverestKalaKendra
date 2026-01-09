import * as types from "../constant/actionTypes";
import { getRequest } from "../services/apiCalls";

const getUserList = (movieList) => ({
  type: types.GET_USER_LIST,
  payload: movieList,
});

export const loadUserDetails = () => async (dispatch) => {
  try {
    console.log("checking")
    const response = await getRequest("payment/userList");
    dispatch(getUserList(response.data));
  } catch (error) {
    console.log("error");
  }
};