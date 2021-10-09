import React from "react";

function OrderCard({ order }) {
  return (
    <div>
      <div>
        <h2>{order.serialNumber}</h2>
        <h2>{order.displayId}</h2>
        <p>{order.orderDate}</p>
        <p>{order.typeDesc}</p>
        <p>{order.orderSite}</p>
      </div>
    </div>
  );
}

export default OrderCard;
