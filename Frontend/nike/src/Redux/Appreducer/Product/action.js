import * as types from "./action.types"
import axios from "axios"

export const getDataLoading =()=>
({type:types.GET_DATA_LOADING})

export const getDataSuccess = (payload) => 
({ type: types.GET_DATA_SUCCESS, payload });

export const getDataError = () => {
return ({ type:types.GET_DATA_ERROR });}

export const PriceLowToHigh = () =>
({ type:types.PRICE_LOW_TO_HIGH });

export const PriceHighToLow = () => 
({ type:types.PRICE_HIGH_TO_LOW });

export const ratingLowToHigh = () =>
 ({ type:types.RATING_LOW_TO_HIGH });

export const ratingHighToLow = () =>
 ({ type:types.RATING_HIGH_TO_LOW });

 export const resetFilters = () =>
({ type:types.RESET_FILTERS });



export const ShowFilter=()=>{
return {type:types.SHOW_FILTER}
}

export const Showsingleproduct=(url)=>async (dispatch)=>{
    dispatch(getDataLoading())
    return  axios.get(url)
    .then((r)=>{
        dispatch({type:types.SHOW_SINGLE_PRODUCT,payload:r.data.data})
    })
    .catch((e)=>{
        console.log(e)
        dispatch(getDataError())
    })
    }


export const getData=(url,param)=>async (dispatch)=>{
 
         dispatch(getDataLoading())
        return  axios.get(url,param)
        .then((r)=>{
            dispatch(getDataSuccess(r.data.data))
        })
        .catch((e)=>{
            console.log(e)
            dispatch(getDataError())
        })
    
}
