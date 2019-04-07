import React, { Component } from "react";
import { Image, Container, Grid } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <h3 style={{ color: "#634028" }}>hannahmhakansson@gmail.com</h3>
        <Grid centered style={{ marginBottom: "2em", marginTop: "2em" }}>
          <a href="https://google.se" target="_blank" rel="noopener noreferrer">
            <Image
              size="mini"
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/linkedin.png?alt=media&token=5cb19973-0b69-4d32-ac46-08fd6e949a37"
              }
            />
          </a>
          <a href="https://google.se" target="_blank" rel="noopener noreferrer">
            <Image
              size="mini"
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/vimeo.png?alt=media&token=ee9124db-1e13-422a-8cdc-68660ba2856e"
              }
            />
          </a>
          <a href="https://google.se" target="_blank" rel="noopener noreferrer">
            <Image
              size="mini"
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/Insta.png?alt=media&token=006485c8-96ca-4f94-acc3-f05091a0fc53"
              }
            />
          </a>
          <a href="https://google.se" target="_blank" rel="noopener noreferrer">
            <Image
              size="mini"
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-53c6c.appspot.com/o/dribbble.png?alt=media&token=1bd064ed-264e-4f7c-a09c-ed01b00d5bdb"
              }
            />
          </a>
        </Grid>
      </Container>
    );
  }
}
