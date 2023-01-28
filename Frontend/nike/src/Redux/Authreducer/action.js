 import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import { setTolocalstorage } from "../../Components/Localstotage/Localstorage"
 import * as types from "./action.types"

 export const GetSignupsuccess=(cred)=> async (dispatch)=>{
    console.log(cred)
       axios({
        method:"POST",
        url:"http://localhost:8080/signup",
        data:cred,
       }).then((r)=>{
        dispatch({type:types.SIGNUP_SUCCESS,payload:r.data})
       })
       .catch((e)=>{
        dispatch({type:types.SIGNUP_FAILED,payload:e})
       })
  }

  export const GetLoginsuccess=(data)=> async (dispatch)=>{
    axios({
     method:"POST",
     url:"http://localhost:8080/login",
     data:data
    }).then((r)=>{
     dispatch({type:types.LOGIN_SUCCESS,payload:r.data})
     setTolocalstorage("token",r.data.token)
    })
    .catch((e)=>{
     dispatch({type:types.LOGIN_FAILED,payload:e})
    })
}

export const GetLogoutSuccess=()=>async (dispatch)=>{

}



  