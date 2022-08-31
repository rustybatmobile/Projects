import React from "react";
import {connect} from 'react-redux';
import "./index.css";
import { flipAction } from "./actions/flipAction";


class App extends React.Component {

  handleFlip = () => {
    const {flipAction} = this.props;
    flipAction && flipAction();
  }

  render() {

    const lightedness = this.props.isLightOn ? "lit" : "dark";
  
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.handleFlip}>flip</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const isLightOn = state.isLightOn;
  return {
    isLightOn
  };
}

export default connect(mapStateToProps, {flipAction})(App);

