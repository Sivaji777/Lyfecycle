import React, { Component } from "react";
import Lifecycle1 from "./Lifecycle1";
export default class Lifecycle extends Component {
  
   /* mounting face */   
  constructor(props) {
    super(props);
    this.state = {
      name: "mahadev",
      men: true,
    };
    console.log("--------- constructor ----------");
  }
  
   static getDerivedStateFromProps(props, state){
    console.log(' 2 getDerivedStateFromProps');
    return null
   }

  componentDidMount() {
    console.log("--------- 3 component did mount --------");
  }

  /* updating face */
 static getDerivedStateFromProps(props, state){
    console.log(' 1 getDerivedStateFromProps');
    return null
}
shouldComponentUpdate(){
    console.log(' 2 shouldComponentUpdate');
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
   console.log(' 4 getSnapshotBeforeUpdate');
    return null
}

componentDidUpdate(){
    console.log('A 5 componentDidUpdate');
}

   /* unmounting face */ 
  
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
    console.log('------ 3,3 -------')
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
