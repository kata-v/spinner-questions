import React from "react";
import { Redirect } from "react-router-dom";
import "./App.css";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      { selectedItem: null },
      { id: 27, name: "Animals" },
      { id: 10, name: "Books" },
      { id: 11, name: "Film" },
      { id: 9, name: "General knowledge" },
      { id: 22, name: "Geography" },
      { id: 23, name: "History" },
      { id: 12, name: "Music" },
      { id: 17, name: "Science & nature" },
      { id: 21, name: "Sports" },
      { id: 15, name: "Video Games" },
    ];
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 4000);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };

    const redirectObj = {
      pathname: "/quiz",
      choose: {
        id: this.state.id,
        item: this.state.name,
      },
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    return selectedItem ? (
      <Redirect to={redirectObj} />
    ) : (
      <div className="wheel-container">
        <div className="spin" onClick={this.selectItem}>
          <div className="inner_spin"></div>
        </div>
        <div className={`wheel ${spinning}`} style={wheelVars}>
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
