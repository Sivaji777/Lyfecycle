import React, { Component } from "react";
import Lifecycle1 from "./Lifecycle1";
export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mahadev",
      men: true,
    };
    console.log("--------- constructor ----------");
  }

  componentDidMount() {
    console.log("--------- component did mount --------");
  }
  componentWillMount() {
    console.log("Component will mount!");
  }

  componentDidUpdate() {
    console.log("-------- compionet did update --------");
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("----------- Component will UPDATE! ----------");
  }

  componentWillUnmount() {
    console.log("----------- component will unmount --------");
  }

  updateData = () => {
    this.setState({ name: "sivaji" });
  };
  deleteMethod = () => {
    this.setState({ men: false });
  };

  render() {
    return (
      <div>
        dfdfbdbf
        <h1>{this.state.name}</h1>
        <button onClick={this.updateData}>update</button>
        <button onClick={this.deleteMethod}>delete</button>
        {this.state.men === true ? <Lifecycle1 /> : <h1>Deleted</h1>}
      </div>
    );
  }
}
