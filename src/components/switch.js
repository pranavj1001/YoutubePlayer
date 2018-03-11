import React, { Component } from 'react';

class Switch extends Component {
  render() {
    return(
      <div className="control--switch">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
        <p>Day/Night</p>
      </div>
    );
  }
}

export default Switch;
