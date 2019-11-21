import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="Bomb">
      <p>tick/tock/BOOM!!!!</p>
    </div>
    );
  }
}
