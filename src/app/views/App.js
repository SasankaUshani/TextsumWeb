import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

 
  render() {
    return (
      <div>
        <h6>Toggle </h6>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Add to preference' : 'Added'}
      </button>


        {/* <ButtonComponent/> */}
      </div>
    );
  }
}

export default App