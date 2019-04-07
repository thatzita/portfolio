import React, { Component } from "react";
import Sliders from "./Sliders";
import Footer from "./Footer";

export default class Content extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <header className="container"> */}
        <div className="fullscreen-video-wrap">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/Seal_octo_loop_HQ.mp4?alt=media&token=d160930d-e050-4159-9ec5-eca61d34337e"
            type="video/mp4"
            autoPlay
            loop
          />
        </div>

        {/* </header> */}
        <Sliders />

        <Footer />
      </React.Fragment>
    );
  }
}
