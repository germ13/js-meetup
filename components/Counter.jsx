import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    var self = this;
    this.tick = this.tick.bind(this);
  }
  
  tick(e) {
    this.setState({count: this.state.count + 2});
  }
  
  render() {
    return (
      <div>
          <button onClick={this.tick}>{this.state.count}</button>
      </div>
    );
  }
}

Counter.defaultProps = { initialCount: 3 };

React.render(<Counter />,
    document.getElementById("root"));

