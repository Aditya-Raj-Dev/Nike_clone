import axios from "axios";
import {
  removefromlocalstorage,
  setTolocalstorage,
} from "../../Components/Localstotage/Localstorage";
import * as types from "./action.types";
import { setToast } from "../../Function/Toastfunction";



export const GetSignupsuccess = (cred, toast, navigate) => async (dispatch) => {
  console.log(cred);
  axios({
    method: "POST",
    url: "https://nike-backend-q8of.onrender.com//signup",
    data: cred,
  })
    .then((r) => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data });
      setToast(
        toast,
        `${r.data.msg}`,
        "You Can login now",
        r.data.toast === "s" ? "success" : "info"
      );
      navigate("/login");
    })
    .catch((e) => {
      setToast(toast, "Signup Failed", "", "error");
      dispatch({ type: types.SIGNUP_FAILED, payload: e });
    });
};

export const GetLoginsuccess =
  (data, toast, nav, navigate) => async (dispatch) => {
    axios({
      method: "POST",
      url: "https://nike-backend-q8of.onrender.com//login",
      data: data,
    })
      .then((r) => {
        console.log(r.data)
        if(r.data.toast==="s"){
          setToast(toast, "Login successfull", "You can Shop Now", "success");
          dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
          setTolocalstorage("token", r.data.token);
          setTolocalstorage("name", r.data.user);
          navigate(nav);
        }
        else{
          setToast(toast, `${r.data.msg}`, "", "error");
        }
      
      })
      .catch((e) => {
        console.log(e)
        setToast(toast, "Login Failed", "Please login again", "error");
        dispatch({ type: types.LOGIN_FAILED, payload: e });
      });
  };

export const GetLogoutSuccess = (toast) => async (dispatch) => {
  removefromlocalstorage("token");
  removefromlocalstorage("name");
  setToast(toast, "Logout Successfully", "", "error");
  dispatch({ type: types.LOGOUT_SUCCESS });
};
