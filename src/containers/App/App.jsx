import React, { Component } from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from "../../components/Scroll/Scroll";
import "./App.css";
import ErrorBoundry from "../../components/ErrorBoundry";
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      fieldSearch: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ fieldSearch: event.target.value });
  };
  render() {
    const { robots, fieldSearch } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(fieldSearch.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc vac">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFreinds</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
}

export default App;
