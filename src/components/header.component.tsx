import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  data: any;
}

class Header extends React.Component<IProps> {
  render() {
    if (!this.props.data) return null;

    const title = this.props.data.title;
    const description = this.props.data.description;
    const mainEng = this.props.data.mainEng;
    const mainKor = this.props.data.mainKor;
    return (
      <header id="home">
        <ParticlesBg color="#228f97" num={25} type="cobweb" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#search">
                Serial Number Search
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{title}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <li>
                  <a href={mainKor} className="button btn project-btn">
                    <FontAwesomeIcon icon={faHeart} />
                    Pygmalion Dolls - Kor
                  </a>
                  <a href={mainEng} className="button btn github-btn">
                    <FontAwesomeIcon icon={faHeart} />
                    Pygmalion Dolls - Eng
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#search">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
