import React from "react";
//import ReactDOM from "react-dom";
import Wheel from "./components/wheel/Appwheel";
import "./indexwheel.css";
//import categories from "./components/Categories";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      "General Knowledge",
      "Science",
      "Maths",
      "Video Games",
      "Geography",
      "Music",
      "Computer",
      "Entertainment",
      "Sports",
      "Movies",
    ];
  }

  render() {
    const listitems = this.state;
    return (
      <div className="App">
        <p>Logged in as Kata</p>
        <Wheel items={listitems} />
      </div>
    );
  }
}

export default App;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
