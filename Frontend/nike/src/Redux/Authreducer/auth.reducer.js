import { StatHelpText } from "@chakra-ui/react"
import { extractfromLocatstorage } from "../../Components/Localstotage/Localstorage"
import * as types from "./action.types"

const initialstate={
    isAuth: extractfromLocatstorage("token")?true: false,
    signup: extractfromLocatstorage("token")?true:false,
    token: extractfromLocatstorage("token") || "",
    user: extractfromLocatstorage("name") || "",
    toast:"",
    msg:"",
    login:false
}
export const authReducer=(oldstate=initialstate,{type,payload})=>{
    switch(type){
        case types.LOGOUT_SUCCESS:{
            return {
                ...oldstate,signup:false,isAuth:false,token:""
            }
        }
         case types.SIGNUP_SUCCESS:{
            return{
               ...oldstate,signup:true,msg:payload.msg,toast:payload.toast
            }
         }
         case types.SIGNUP_FAILED:{
            return{
                ...oldstate,msg:payload.msg,toast:payload.toast
            }
         }
         case types.LOGIN_SUCCESS:{
            return {
                ...oldstate,login:true,user:payload.user,
                isAuth:true,msg:payload.msg,toast:payload.toast,token:payload.token,signup:true
            }
         }
         case types.LOGIN_FAILED:{
            return {
                ...oldstate,msg:payload.msg,toast:payload.toast
            }
         }
        default : return oldstate
    }
}