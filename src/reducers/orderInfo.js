import { RETRIEVE_ORDERINFO } from "../actions/types";

const initialState: any[] = [];

function orderInfoReducer(
  orderInfo = initialState,
  action: { type: any, payload: any }
) {
  const { type, payload } = action;

  switch (type) {
    case RETRIEVE_ORDERINFO:
      return payload;

    default:
      return orderInfo;
  }
}

export default orderInfoReducer;
