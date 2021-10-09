import React from "react";
import OrderCard from "./order-card.component";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { order: state.order };
};

function ConnectedOrderList({ order }) {
  if (order) {
    return <OrderCard order={order} />;
  } else {
    return <p className="lead">No Orders to Display</p>;
  }
}

const OrderList = connect(mapStateToProps)(ConnectedOrderList);

export default OrderList;
