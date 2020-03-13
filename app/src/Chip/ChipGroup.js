import React from "react";
import data from "./data/data.json"
import Chip from "./Chip";
export default class ChipGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data
    };
  }
  /**
   * @description Remove the item for the given ID
   * @param {Number} itemID
   */
  removeItem = itemID => { 
    const items = [...this.state.items];
    const updatedItems = items.filter(item => item.id !== itemID);    
    this.setState({
      items:updatedItems
    });
    this.props.onRemove(itemID)
  };

  render() {
    const items = this.state.items;

    return (
      <>
        {items.map((item, i) => (         
          <Chip item={item} onDeleteClick={this.removeItem} key={item.id}/>          
        ))}
      </>
    );
  }
}
