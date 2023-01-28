import { StatHelpText } from "@chakra-ui/react"
import * as types from "./action.types"

const initialstate={
    isAuth:false,
    signup:false,
    token:"",
    user: {},
    toast:"",
    msg:""
}
export const authReducer=(oldstate=initialstate,{type,payload})=>{
    switch(type){
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
                ...oldstate,isAuth:true,msg:payload.msg,toast:payload.toast,token:payload.token
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