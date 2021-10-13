import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

function OrderCard({ order }) {
  if (order.error) {
    return (
      <section>
        <h4 className="error-message">{order.error}</h4>
      </section>
    );
  } else {
    const ownedBy = "Owned by: " + order.displayId;
    return (
      <Card className="column centered" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <h1 className="card-title header-col">
            Serial: {order.serialNumber}
          </h1>
          <h4 className="card-subtitle">{ownedBy}</h4>

          <CardContent>
            <img
              className="card-center"
              src="/images/logo.png"
              alt="pygmalion dolls logo"
            />
            <section className="order-desc">
              <h5>Order Date: {order.orderDate}</h5>
              <h5>Order Description: {order.typeDesc}</h5>
              <h5>Order Site: {order.orderSite}</h5>
            </section>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default OrderCard;
