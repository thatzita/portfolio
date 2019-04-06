import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import Carousel from "./Carousel";
// import { pictures, animations } from "../database/dummy";
import firebase from "../firebase";

export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      animations: null,
      pictures: null
    };
  }
  componentDidMount() {
    const dbAnimations = firebase.firestore().collection("animations");
    const dbGraphicDesign = firebase.firestore().collection("graphicDesign");
    let animationArr = [];
    let graphicArr = [];

    dbAnimations.get().then(snapshot => {
      snapshot.forEach(doc => {
        animationArr.push(doc.data());
      });
      this.setState({
        animations: animationArr
      });
    });
    dbGraphicDesign.get().then(snapshot => {
      snapshot.forEach(doc => {
        graphicArr.push(doc.data());
      });
      this.setState({
        pictures: graphicArr
      });
    });
  }
  render() {
    const animations = this.state.animations || [""];
    const pictures = this.state.pictures || [""];

    return (
      <div>
        <Image
          className="center"
          src={
            "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/Hannahsson_Logo.png?alt=media&token=6ad7f8ef-2326-4e28-8a24-c6216c7c8f14"
          }
        />
        {/* <div className="maxCenter">
          <div className="centeredIcons">
            <a
              href="https://google.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="space first"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/linkedin.png?alt=media&token=5cb19973-0b69-4d32-ac46-08fd6e949a37"
                }
              />
            </a>
            <a
              href="https://google.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="space"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/vimeo.png?alt=media&token=ee9124db-1e13-422a-8cdc-68660ba2856e"
                }
              />
            </a>
            <a
              href="https://google.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="space"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/Insta.png?alt=media&token=006485c8-96ca-4f94-acc3-f05091a0fc53"
                }
              />
            </a>
            <a
              href="https://google.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="space"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/dribbble.png?alt=media&token=1bd064ed-264e-4f7c-a09c-ed01b00d5bdb"
                }
              />
            </a>
          </div>
        </div> */}

        <Carousel content={pictures} title={"Graphical Design"} />
        <Carousel content={animations} title={"Animation"} />
      </div>
    );
  }
}
