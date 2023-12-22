import React from "react";
import "./atom.css";

export class Atom extends React.Component {
  static defautProps = {
    animationDuration: 1000,
    size: 60,
    color: "#fff"
  };

  spinnerStyle() {
    return {
      height: `${this.props.size}px`,
      width: `${this.props.size}px`
    };
  }

  circleStyle() {
    return {
      color: this.props.color,
      fontSize: `${this.props.size * 0.24}px`
    };
  }

  lineStyle() {
    return {
      animationDuration: `${this.props.animationDuration}ms`,
      borderLeftWidth: `${this.props.size / 25}px`,
      borderTopWidth: `${this.props.size / 25}px`,
      borderLeftColor: this.props.color
    };
  }
  render() {
    return (
      <div className="atom-spinner" style={this.spinnerStyle()}>
        <div className="spinner-inner">
          <div className="spinner-line" style={this.lineStyle()} />
          <div className="spinner-line" style={this.lineStyle()} />
          <div className="spinner-line" style={this.lineStyle()} />
          <div className="spinner-circle" style={this.circleStyle()}>
            &#9679;
          </div>
        </div>
      </div>
    );
  }
}
