import React, { Component } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import { Image, Divider } from "semantic-ui-react";
import { Button, Modal, Container, Grid, Header } from "semantic-ui-react";

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
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
          breakpoint: 470,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const settingsModal = {
      // dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
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
        return <img key={index} src={data} className="modalSize" alt="" />;
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
        <Container>
          {this.state.content ? (
            <Modal
              size="fullscreen"
              open={this.state.modalOpen}
              onClose={this.handleClose}
              style={
                {
                  // backgroundColor: "#14131f",
                  // marginTop: "2vh !important",
                  // marginLeft: "auto",
                  // marginRight: "auto",
                  // left: "2vh",
                  // position: "absolute",
                  // height: "auto"
                }
              }
              className="modalOrientation"
            >
              {/* <Modal.Header>Select a Photo</Modal.Header> */}
              <Modal.Content
                image
                style={{
                  backgroundColor: "#14131f"
                }}
              >
                <Image wrapped size="large" src={this.state.content.data} />
                <Modal.Description
                  style={{
                    backgroundColor: "#14131f"
                  }}
                >
                  {/* <Modal.Header>Default Profile Image</Modal.Header> */}
                  <h1 className="modalHeader">
                    {this.state.content.info.title}
                  </h1>
                  <p className="modalP">
                    {this.state.content.info.description}
                  </p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Content
                style={{
                  backgroundColor: "#14131f"
                }}
              >
                <Modal.Description
                  style={{
                    backgroundColor: "#14131f"
                  }}
                >
                  {this.state.content.info.pictures.length > 0 ? (
                    <h3 className="processTitle">Process</h3>
                  ) : null}
                  <Grid centered>
                    <Slider className="slack-slider-modal" {...settingsModal}>
                      {modalPictures}
                    </Slider>
                  </Grid>
                  {this.state.content.storyboard.length > 0 ? (
                    <React.Fragment>
                      <h3 className="storyboardTitle">Storyboard</h3>
                      <Grid centered>
                        <Image
                          wrapped
                          size="massive"
                          src={this.state.content.storyboard}
                        />
                      </Grid>
                    </React.Fragment>
                  ) : null}
                  {/* {this.state.content.storyboard.length > 0 ? (
                    <React.Fragment>
                      <h3 className="storyboardTitle">Storyboard</h3>
                      <Image
                        // wrapped
                        size="tiny"
                        src={this.state.content.storyboard}
                      />
                    </React.Fragment>
                  ) : null} */}
                  <Modal.Actions style={{ backgroundColor: "#14131f" }}>
                    <Grid
                      centered
                      style={{ marginBottom: "2em", marginTop: "2em" }}
                    >
                      <Button inverted color="brown" onClick={this.handleClose}>
                        Close
                      </Button>
                    </Grid>
                  </Modal.Actions>
                  <Divider />
                  <Footer />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          ) : null}
        </Container>
        <div className={this.props.title}>
          {this.props.title === "Graphical Design" ? (
            <Grid centered>
              <div style={{ textAlign: "center" }}>
                <Image
                  style={{ bottom: "10vh" }}
                  // className="downArrow"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/Path%201%402x.png?alt=media&token=869c7540-e7ac-4eeb-89aa-5b28e35f1e28"
                />
              </div>
            </Grid>
          ) : null}
          <h1 style={{ marginBottom: "-1em", marginTop: "10vh" }}>
            {this.props.title}
          </h1>
          <Grid centered>
            <Slider {...settings}>{carousel}</Slider>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
