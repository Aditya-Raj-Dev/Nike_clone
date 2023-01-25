import * as types from "./action.types"

const initialstate={
    prod:[],
    isloading:false,
    isError:false,
}

export const ProductReducer=(state=initialstate,{type,payload})=>{
console.log(payload)
    switch(type){
        case types.GET_DATA_LOADING:{
            return {
                ...state,isloading:true
            };
        }
        case types.GET_DATA_ERROR:{
            return {
                ...state,isError:true,isloading:false
            }
        }
        case types.GET_DATA_SUCCESS:{
            return {
                ...state,
                isloading:false,
                prod:payload
            }
        }
        default:{
            return state
        }
    }
}