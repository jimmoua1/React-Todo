import React from 'react';
import Todo from '../src/components/Todo';

class App extends React.Component {
  constructor(prop){
    super(prop)

    this.state = {
      message: "Hi"
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <Todo />
        <ul>
          <li>Chicken</li>
        </ul>
      </div>
    );
  }
}

export default App;
