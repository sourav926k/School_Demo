import axios from "axios";
import {
  AUTH_USER,
  UNAUTH_USER,
  FETCH_DATA,
  FETCH_NOTICE,
  LOGIN_ERROR,
  NOTICE_POST,
  POST_ERROR,
  STUDENT_ERROR,
  STUDENT_USER,
} from "./types";

export const signup = (formProps, loginEntery) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://ak-sms-api.herokuapp.com/api/v1/user/register",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    // when user got login after get correct email and password then redirect to given path here calling call back function that is loginEntry
    loginEntery();
    //local storage to set value as hold on after reffresh same output we will get
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: "Email-id Already Registered." });
  }
};

//sign in
export const signin = (formProps, loginEntery) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://ak-sms-api.herokuapp.com/api/v1/user/login",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    // when user got login after get correct email and password then redirect to given path here calling call back function that is loginEntry
    loginEntery();
    //local storage to set value as hold on after reffresh same output we will get
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: "Invalid Email or Password" });
  }
};

//signout action creation
export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: UNAUTH_USER,
  };
};



export const admissionForm = (formProps, callback) => async (dispatch) => {
  try {
    // const response=await axios.post('http://localhost:3090/signup', formProps);
    const response = await axios.post(
      "https://ak-sms-api.herokuapp.com/api/v1/student",
      formProps
    );
    dispatch({ type: STUDENT_USER, payload: response.data.token });
    callback();
  } catch (e) {
    dispatch({ type: STUDENT_ERROR, payload: "Error...." });
  }
};

export const fetchdata = () => async (dispatch) => {
  try {
    // Request from axios to get data from api
    // const response = axios.get('https://ak-api-nodejs.herokuapp.com/api/getuser');
    const response = await axios.get(
      "https://ak-sms-api.herokuapp.com/api/v1/student"
    );

    console.log(response.data.student);
    // console.log("object")
    dispatch({ type: FETCH_DATA, payload: response.data.student });
  } catch (e) {
    dispatch({ type: STUDENT_ERROR, payload: "Error...." });
  }
};

// Imported Components
// import { FETCH_NOTICE, NOTICE_POST, POST_ERROR } from "./types";

export const noticePost = (formProps) => async (dispatch) => {
  try {
    const response = axios.post(
      "https://ak-sms-api.herokuapp.com/api/v1/notice/post",
      formProps
    );

    dispatch({ type: NOTICE_POST, payload: response.data });
  } catch (error) {
    //  dispatch({type: POST_ERROR, payload: ""})
    console.log(error);
  }
};

export const fetchNotice = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://ak-sms-api.herokuapp.com/api/v1/notice"
    );
    console.log("action index", response.data.data);
    console.log(response.data.data);
    dispatch({
      type: FETCH_NOTICE,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: POST_ERROR, payload: "Invalid  " });
  }
};
