import React, { Component } from "react";
import { connect } from "react-redux";
import OrderList from "./order-list.component";
import { findOrdersBySerialId } from "../actions/orderInfo";

function mapDispatchToProps(dispatch) {
  return {
    findOrdersBySerialId: (searchField) =>
      dispatch(findOrdersBySerialId(searchField)),
  };
}

class ConnectedSearch extends Component<
  any,
  { searchField: string; setSearchField: any }
> {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      setSearchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const { searchField } = this.state;
    this.props.findOrdersBySerialId({ searchField });
    this.setState({ searchField: "" });
  }

  render() {
    const { searchField } = this.state;
    return (
      <section id="search">
        <div className="">
          <h2 className="">Serial Number Search</h2>
        </div>
        <div className="">
          <form onSubmit={this.handleSubmit}>
            <input
              className="search"
              type="search"
              value={searchField}
              aria-label="Input Serial Number"
              placeholder="Input Serial Number"
              onChange={this.handleChange}
            />
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <OrderList />
      </section>
    );
  }
}

const Search = connect(null, mapDispatchToProps)(ConnectedSearch);

export default Search;
