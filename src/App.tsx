import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Search from "./components/search.component";
import Header from "./components/header.component";
import Footer from "./components/footer.component";

interface IState {
  siteData: any;
}
class App extends Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = {
      siteData: {
        title: "Pygmalion Dolls - Serial Lookup",
        description:
          "This is a site to lookup serial numbers for Pygmalion Dolls",
        mainEng: "http://pygmaliondolls.com",
        mainKor: "http://pygmaliondoll.com",
        instagram: "",
        facebook: "",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.siteData} />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
