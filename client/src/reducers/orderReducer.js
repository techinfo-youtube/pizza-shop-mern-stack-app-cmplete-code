export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "PLACE_ORDER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "USER_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "USER_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };
    case "USER_ORDER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const allUserOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ALL_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ALL_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };
    case "ALL_ORDER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
