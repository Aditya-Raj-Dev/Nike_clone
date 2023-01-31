import * as types from "./action.types";
import axios from "axios";
import { setToast } from "../../../Function/Toastfunction";

export const ratingHighToLow = () => ({ type: types.RATING_HIGH_TO_LOW });

export const ratingLowToHigh = () => ({ type: types.RATING_LOW_TO_HIGH });

export const PriceHighToLow = () => ({ type: types.PRICE_HIGH_TO_LOW });

export const PriceLowToHigh = () => ({ type: types.PRICE_LOW_TO_HIGH });
export const resetFilters = () => ({ type: types.RESET_FILTERS });

export const ShowFilter = () => {
  return { type: types.SHOW_FILTER };
};

export const Showsingleproduct = (url) => async (dispatch) => {
  dispatch(getDataLoading());
  return axios
    .get(url)
    .then((r) => {
      dispatch({ type: types.SHOW_SINGLE_PRODUCT, payload: r.data.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch(getDataError());
    });
};

export const getDataLoading = () => ({ type: types.GET_DATA_LOADING });

export const getDataSuccess = (payload) => ({
  type: types.GET_DATA_SUCCESS,
  payload,
});

export const getDataError = () => {
  return { type: types.GET_DATA_ERROR };
};

export const getData = (url, param) => async (dispatch) => {
  dispatch(getDataLoading());
  return axios
    .get(url, param)
    .then((r) => {
      dispatch(getDataSuccess(r.data.data));
    })
    .catch((e) => {
      console.log(e);
      dispatch(getDataError());
    });
};

export const ShowCartdata = (url, toast) => async (dispatch) => {
  return axios
    .get(url)
    .then((r) => {
      dispatch({ type: types.SHOW_CART_DATA, payload: r.data.data });
    })
    .catch((e) => {
      setToast(toast, "Something went Wrong", "", "error");
    });
};

export const DeleteCartItem = (url, toast) => async (dispatch) => {
  console.log(url, toast);
  return axios
    .delete(url)
    .then((r) => {
      dispatch({ type: types.DELETE_CART_ITEM, payload: r.data.data });
      setToast(toast, "Item Successfully Deleted", "", "success");
    })
    .catch((e) => {
      setToast(toast, "Something went Wrong", "", "error");
    });
};

export const UpdateCartItem = (url, qty, toast) => async (dispatch) => {
  console.log(url);
  console.log(qty);
  console.log(toast);
  return axios({
    url: url,
    method: "PATCH",
    data: {
      qty: qty,
    },
  })
    .then((r) => {
      console.log(r);
      dispatch({ type: types.UPDATE_CART_ITEM, payload: r.data.data });
      setToast(toast, "Quantity Successfully updated", "", "success");
    })
    .catch((e) => {
      setToast(toast, "Something went Wrong", "", "error");
    });
};

export const SearchProduct=(prod)=>async(dispatch)=>{
console.log(prod)
}
