import React, { Component } from "react";
import { connect } from "react-redux";
import { findOrdersBySerialId } from "../actions/orderInfo";
import Fade from "react-reveal";

interface IProps {
  orderInfo?: OrderInfo;
}
interface IState {
  orderInfo?: OrderInfo;
  currentOrder?: OrderInfo;
  searchSerial: string;
}

interface OrderInfo {
  serialNumber: string;
  customerId: string;
  orderDate: string;
  siteName: string;
  description: string;
}

class OrderInfoList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onChangeSearchSerial = this.onChangeSearchSerial.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveOrder = this.setActiveOrder.bind(this);
    this.findBySerial = this.findBySerial.bind(this);

    this.state = {
      currentOrder: undefined,
      searchSerial: "",
    };
  }

  onChangeSearchSerial(e: { target: { value: any } }) {
    const searchSerial = e.target.value;

    this.setState({
      searchSerial: searchSerial,
    });
  }

  refreshData() {
    this.setState({
      currentOrder: undefined,
    });
  }

  setActiveOrder(orderInfo: any) {
    this.setState({
      currentOrder: orderInfo,
    });
  }

  findBySerial() {
    this.refreshData();

    const order = findOrdersBySerialId(this.state.searchSerial);
    this.setActiveOrder(order);
  }

  render() {
    const { searchSerial, currentOrder } = this.state;
    const { orderInfo } = this.props;
    return (
      <section id="search">
        <Fade duration={1000}>
          <div className="list row">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title"
                  value={searchSerial}
                  onChange={this.onChangeSearchSerial}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.findBySerial}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              {currentOrder && searchSerial ? (
                <div>
                  <h4>Order Information</h4>
                  <div>
                    <label>
                      <strong>Serial Number:</strong>
                    </label>{" "}
                    {currentOrder.serialNumber}
                  </div>
                  <div>
                    <label>
                      <strong>Owner:</strong>
                    </label>{" "}
                    {currentOrder.customerId}
                  </div>
                  <div>
                    <label>
                      <strong>Order Date:</strong>
                    </label>{" "}
                    {currentOrder.orderDate}
                  </div>
                  <div>
                    <label>
                      <strong>Order Site:</strong>
                    </label>{" "}
                    {currentOrder.siteName}
                  </div>
                  <div>
                    <label>
                      <strong>Description:</strong>
                    </label>{" "}
                    {currentOrder.description}
                  </div>
                </div>
              ) : (
                <div>
                  <br />
                  <p>Serial Number Not Found...</p>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

const mapStateToProps = (state: { orderInfo: OrderInfo }) => {
  return {
    orderInfo: state.orderInfo,
  };
};

export default connect(mapStateToProps, {
  findOrdersBySerialId,
})(OrderInfoList);
