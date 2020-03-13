import React from "react";
import ChipGroup from "./ChipGroup";

export default class mainpage extends React.Component {

  state = { chip: '' }

  removedChip = (chipId) => {
      this.setState({chip: chipId});
  }

  render() {      
    console.log("Closed " + this.state.chip)
    return (
      <>
        <h1 className="text-center">Title</h1>
            <ChipGroup onRemove = {this.removedChip}/>                     
      </>
    );
  }
}
