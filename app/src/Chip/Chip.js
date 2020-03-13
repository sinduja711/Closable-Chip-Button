import React from "react";
export default class Chip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.item.color,
      text: this.props.item.text,
      id: this.props.item.id,
      isClosable: this.props.item.isClosable    
    };
  }

  render() {
    const { color, text, isClosable, id } = this.state;

    return (
      <>
        <div className="chipButton" style={{ backgroundColor: color }}>
          <div className="chipText">{text}</div>
          <div
            className={isClosable === "true" ? "close" : ""}
            onClick={() => this.props.onDeleteClick(id)}
          >           
            <span className="closeButton">x</span>
          </div>
        </div>
      </>
    );
  }
}
