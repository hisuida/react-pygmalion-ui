import { RETRIEVE_ORDERINFO } from "./types";

import OrderInfoDataService from "../services/orderInfo.service";

export const findOrdersBySerialId =
  (params) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const res = await OrderInfoDataService.findById(params.searchField);

      dispatch({
        type: RETRIEVE_ORDERINFO,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
