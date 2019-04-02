import React, { Component } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import { Image } from "semantic-ui-react";
import { Button, Modal } from "semantic-ui-react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      modalOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleClick = data => e => {
    e.preventDefault();
    this.setState({
      content: data,
      modalOpen: true
    });
  };

  render() {
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      // focusOnSelect: true,
      centerPadding: "60px",
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const content = this.props.content;
    let modalPictures;

    if (this.state.content !== null) {
      const arr = this.state.content.info.pictures;
      modalPictures = arr.map((data, index) => {
        return <img key={index} src={data} alt="" />;
      });
    }

    const carousel = content.map((data, index) => {
      return (
        <img
          key={index}
          className="sameSize"
          src={data.data}
          alt=""
          onClick={this.handleClick(data)}
        />
      );
    });

    return (
      <React.Fragment>
        {this.state.content ? (
          <Modal
            className="modal"
            open={this.state.modalOpen}
            onClose={this.handleClose}
          >
            {/* <Modal.Content> */}
            <div style={{ paddingLeft: "5em", paddingRight: "5em" }}>
              <div className="flexContainer">
                <Image
                  className="imageModalSize"
                  src={this.state.content.data}
                  // floated="left"
                />
                <div className="modalContent">
                  <h1 className="modalHeader">
                    {this.state.content.info.title}
                  </h1>
                  <p className="modalP">
                    {this.state.content.info.description}
                  </p>
                </div>
                {/* </Modal.Content> */}
              </div>

              {this.state.content.info.pictures.length > 0 ? (
                <h3 className="processTitle">Process</h3>
              ) : null}
              <Slider {...settings}>{modalPictures}</Slider>
              {this.state.content.storyboard.length > 0 ? (
                <React.Fragment>
                  <h3 className="storyboardTitle">Storyboard</h3>
                  <div className="flexContainerStoryboard">
                    <Image
                      className="storyboard"
                      src={this.state.content.storyboard}
                    />
                  </div>
                </React.Fragment>
              ) : null}
              <Modal.Actions>
                <div style={{ textAlign: "center", marginTop: "2em" }}>
                  <Button onClick={this.handleClose}>CLOSE IT</Button>
                </div>
              </Modal.Actions>
              <Footer />
            </div>
          </Modal>
        ) : // </div>
        null}
        {this.props.title === "Graphical Design" ? (
          <div style={{ textAlign: "center" }}>
            <Image
              className="downArrow"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/Path%201%402x.png?alt=media&token=869c7540-e7ac-4eeb-89aa-5b28e35f1e28"
            />
          </div>
        ) : null}
        <div className={this.props.title}>
          <div className="centerSlide">
            <h1 style={{ marginBottom: "-1em" }}>{this.props.title}</h1>
            <Slider {...settings}>{carousel}</Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
