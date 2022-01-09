import React, { Component } from "react";
import "./Actions.css";
import { Fade } from "react-reveal";
import { Carousel } from "react-bootstrap";

class Actions extends Component {
  render() {
    const { theme, items } = this.props;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Me in Action
            </h1>
            <h4 className="heading-sub-text-2" style={{ color: theme.text }}>
              Photos of me while I am hard at work!
            </h4>
          </Fade>
        </div>
        <Fade bottom duration={2000} distance="20px">
          <Carousel variant="dark">
            {items.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require(`../../assests/images/${item.image}`)}
                    alt="First slide"
                  />
                  <Carousel.Caption className="carousel-caption">
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Fade>
      </div>
    );
  }
}

export default Actions;
