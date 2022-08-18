import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        // enqueues changes to the component state and tells React this component and its children need to be rerendered.
        // this is a request rather than an immediate command, React may delay it and update several components in a single pass.
        // so reading this.state right after calling setState maybe a potential pitfall
        // instead, use componentDidUpdate or the callback function (second argument of the method), both are guaranteed to fire after the update has been applied.
        // the first argument of the method could be the state, or could be an updater function
        // if you want to update the state based on its previous state, use the updater function
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
