import React, { Component } from "react";
import firebase from "../firebase";
import { Button, Checkbox, Form, Radio } from "semantic-ui-react";
import { unwatchFile } from "fs";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      projectAnimation: [],
      projectGraphic: [],
      value: null,
      title: "",
      description: "",
      data: "",
      storyboard: "",
      inputs: []
    };
  }

  handleChange = (e, { value }) => this.setState({ value });

  submit() {
    let obj = {
      info: {
        pictures: [
          this.state.input0,
          this.state.input1,
          this.state.input2,
          this.state.input3,
          this.state.input4,
          this.state.input5,
          this.state.input6,
          this.state.input7,
          this.state.input8,
          this.state.input9,
          this.state.input10,
          this.state.input11,
          this.state.input12,
          this.state.input13,
          this.state.input14,
          this.state.input15,
          this.state.input16,
          this.state.input17,
          this.state.input18,
          this.state.input19
        ]
      }
    };

    let arr = [];

    for (let i = 0; i < obj.info.pictures.length; i++) {
      if (obj.info.pictures[i] !== undefined && obj.info.pictures[i] !== "") {
        arr.push(obj.info.pictures[i]);
      }
    }
    obj = {
      data: this.state.data,
      info: {
        description: this.state.description,
        pictures: arr,
        title: this.state.title
      },
      storyboard: this.state.storyboard
    };

    this.setState({
      value: null,
      title: "",
      description: "",
      data: "",
      storyboard: "",
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",
      input12: "",
      input13: "",
      input14: "",
      input15: "",
      input16: "",
      input17: "",
      input18: "",
      input19: "",
      inputs: []
    });

    this.uploadToDB(obj, this.state.value);
  }

  uploadToDB(obj, whichDB) {
    // console.log(obj);
    // console.log(whichDB);
    const dbAnimations = firebase.firestore().collection("animations");
    const dbGraphicDesign = firebase.firestore().collection("graphicDesign");
    if (whichDB === "animations") {
      dbAnimations.add(obj);
    } else {
      dbGraphicDesign.add(obj);
    }
  }

  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  appendInput() {
    var newInput = `input${this.state.inputs.length}`;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput])
    }));
  }
  render() {
    return (
      <React.Fragment>
        <h1>Add project</h1>
        <Form>
          <Form.Field required>
            <Radio
              label="Animation"
              name="radioGroup"
              value="animations"
              checked={this.state.value === "animations"}
              onChange={this.handleChange}
            />
            {/* </Form.Field>
          <Form.Field> */}
            <Radio
              label="Graphic design"
              name="radioGroup"
              value="graphicDesign"
              checked={this.state.value === "graphicDesign"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Title</label>
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleChangeInput.bind(this)}
            />
          </Form.Field>
          <Form.Field required>
            <label>Main image/movie</label>
            <input
              value={this.state.data}
              name="data"
              onChange={this.handleChangeInput.bind(this)}
            />
          </Form.Field>
          <Form.Field required>
            <label>Description</label>
            <input
              value={this.state.description}
              name="description"
              onChange={this.handleChangeInput.bind(this)}
            />
          </Form.Field>
          <Form.Field>
            <label>Storyboard</label>
            <input
              value={this.state.storyboard}
              name="storyboard"
              onChange={this.handleChangeInput.bind(this)}
            />
          </Form.Field>
          <h2>Pictures</h2>
          <Button onClick={() => this.appendInput()}>Add field</Button>
          {this.state.inputs.map(input => (
            <Form.Field key={input}>
              <label>Picture</label>
              <input
                onChange={this.handleChangeInput.bind(this)}
                value={this.state.input}
                name={input}
              />
            </Form.Field>
          ))}
          <Button type="submit" onClick={this.submit.bind(this)}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}
