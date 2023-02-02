import * as types from "./action.types";

const initialstate = {
  prod: [],
  maindata: [],
  singleprod: [],
  isloading: false,
  isError: false,
  showfilter: true,
  sort: false,
  cart: [],
  shipping:{}
};

export const ProductReducer = (state = initialstate, { type, payload }) => {
  console.log(payload)
  switch (type) {
    case types.SHIPPING_DATA:{
      return{
        ...state,
        shipping:{...payload}
      }
    }
    case types.UPDATE_CART_ITEM: {
      return {
        ...state,
        cart: payload,
      };
    }
    case types.DELETE_CART_ITEM: {
      return {
        ...state,
        cart: payload,
      };
    }
    case types.SHOW_CART_DATA: {
      return {
        ...state,
        cart: payload,
      };
    }
    case types.SHOW_SINGLE_PRODUCT: {
      return {
        ...state,
        singleprod: payload,
      };
    }
    case types.RESET_FILTERS: {
      return {
        ...state,
        prod: state.maindata,
        sort: !state.sort,
      };
    }
    case types.RATING_HIGH_TO_LOW: {
      return {
        ...state,
        prod: state.prod.sort((a, b) => b.rating - a.rating),
        sort: !state.sort,
      };
    }
    case types.PRICE_HIGH_TO_LOW: {
      return {
        ...state,
        prod: state.prod.sort((a, b) => b.price - a.price),
        sort: !state.sort,
      };
    }
    case types.PRICE_LOW_TO_HIGH: {
      return {
        ...state,
        prod: state.prod.sort((a, b) => a.price - b.price),
        sort: !state.sort,
      };
    }
    case types.RATING_LOW_TO_HIGH: {
      return {
        ...state,
        prod: state.prod.sort((a, b) => a.rating - b.rating),
        sort: !state.sort,
      };
    }
    case types.SHOW_FILTER: {
      return {
        ...state,
        showfilter: !state.showfilter,
      };
    }
    case types.GET_DATA_LOADING: {
      return {
        ...state,
        isloading: true,
      };
    }
    case types.GET_DATA_ERROR: {
      return {
        ...state,
        isError: true,
        isloading: false,
      };
    }
    case types.GET_DATA_SUCCESS: {
      return {
        ...state,
        isloading: false,
        prod: payload,
        maindata: payload,
      };
    }
    default: {
      return state;
    }
  }
};
