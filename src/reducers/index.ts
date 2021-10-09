import { RETRIEVE_ORDERINFO } from "../actions/types";

enum SkinType {
  RW = "Real White",
  WH = "White",
  WI = "Warm Ivory",
  SB = "Sand Beige",
  TN = "Tan (Discontinued)",
}

enum ModelType {
  AL = "Allen (Discontinued)",
  CH = "Chen",
  HA = "Ha",
  HN = "Han",
  KY = "Kyle",
  RO = "Robin",
  MA = "Mathew",
  LA = "Lavier",
  EI = "Eita",
  NO = "Noah",
  LB = "Libra",
}

const initialState = { order: [] };

function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  const order = payload ? formatData(payload[0]) : undefined;

  switch (type) {
    case RETRIEVE_ORDERINFO:
      return Object.assign({}, state, {
        order: order,
      });

    default:
      return state;
  }
}

function formatData(payload) {
  const order = {
    displayID: payload.DisplayID ?? payload.CustomerID,
    serialNumber: payload.SerialNumber_ID,
    orderDate: new Date(payload.OrderDate).toLocaleString(),
    typeDesc: getTypeDesc(payload.Type_ID),
    orderSite: getOrderSite(payload.OrderSite),
  };

  return order;
}

function getTypeDesc(typeId) {
  const skinTypeStr = typeId.slice(-2);
  const modelStr = typeId.substring(0, typeId.length - 2);
  const skinType = SkinType[skinTypeStr];
  let modelType;
  if (modelStr.length === 3) {
    modelType = "IYH30 " + ModelType[modelStr.slice(-1)];
  } else {
    modelType = ModelType[modelStr];
  }

  const typeDesc = `${modelType} in ${skinType}`;
  return typeDesc;
}

function getOrderSite(site) {
  switch (site) {
    case 1:
      return "Official Korean Website";
    case 2:
      return "Frost BJD (Discontinued)";
    case 3:
      return "Big BJD (Discontinued)";
    case 4:
      return "Official English Website";
    case 5:
      return "DOLK";
  }
}

export default rootReducer;
