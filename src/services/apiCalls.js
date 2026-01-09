import axios from "axios";

export const getRequest = (url) => {
    console.log("after this api call")
    console.log("checking my url ", `${import.meta.env.VITE_API_URL}/${url}`)
  const getUserList = axios.get(`${import.meta.env.VITE_API_URL}/${url}`);

// const getUserList =[
//     {name:"suresh thapa"},
//     {name:"anil basnet"}
// ]
  return getUserList;
};