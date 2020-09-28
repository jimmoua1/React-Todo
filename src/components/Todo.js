import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      some: "SomeDay"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.some}</h1>
      </div>
    );
  }
}

export default Todo;