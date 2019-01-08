import React, { Component } from 'react';
import DisplayResult from './DisplayResult';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weight: '',
      height: '',
      method: ''
    }
  }

  render() {
    return (
      <div className="App">

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
        
        <div>
          <label id="weightLabel">Weight in kg</label>
          <input name="weight" value={this.state.weight} onChange={(e) => this.setState({weight: e.target.value})} />
        </div>

        <div>
          <label id="heightLabel">Height in cm</label>
          <input name="height" value={this.state.height} onChange={(e) => this.setState({height: e.target.value})} />
        </div>

        <button name="metric" onClick={(e) => this.setState({method: e.target.name})}>Metric method</button>
        <button name="imperial" onClick={(e) => this.setState({method: e.target.name})}>Imperial method</button>

      </div>
    );
  }
}

export default App