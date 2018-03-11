import React, { Component } from 'react';

class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: true,
    };
  }

  render() {
    return(
      <div className="control--switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={() => {
              this.setState({ isChecked: !this.state.isChecked });
              this.props.onNightModeChanged(this.state.isChecked);
            }}
          />
          <span className="slider round" />
        </label>
        <p>Day/Night</p>
      </div>
    );
  }
}

export default Switch;
