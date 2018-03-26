import React from "react";

class Place extends React.Component {

  // RENDER PLACE FUNCTION
  render() {
    return (
      <li
        role="button"
        className="place"
        tabIndex="0"
        onKeyPress={this.props.openInfoWindow.bind(
          this,
          this.props.data.marker
        )}
        onClick={this.props.openInfoWindow.bind(this, this.props.data.marker)}
      >
        {this.props.data.longname}
      </li>
    );
  }
}

export default Place;
