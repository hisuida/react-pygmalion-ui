import { RETRIEVE_ORDERINFO } from "./types";

import OrderInfoDataService from "../services/orderInfo.service";

export const findOrdersBySerialId =
  (id: string) =>
  async (dispatch: (arg0: { type: string, payload: any }) => void) => {
    try {
      const res = await OrderInfoDataService.findById(id);

      dispatch({
        type: RETRIEVE_ORDERINFO,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
