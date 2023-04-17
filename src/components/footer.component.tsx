import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
            <div className="twelve columns centered">
              <ul className="copyright">
                <li>&copy; Copyright 2021 Nordic Giant / Jeane H.</li>
                <li>
                  <a
                    title="Contact Webmaster"
                    href="mailto:pygmaliondolls@gmail.com"
                  >
                    Contact Webmaster
                  </a>
                </li>
              </ul>
            </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
