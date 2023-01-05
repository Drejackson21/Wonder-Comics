import React, { Component } from 'react';
import './App.css';
import List from './List';
import Comics from './Comics';
import Pay from './Pay';



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      showComponent: false,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <div>
        
        <div className="store-container">
          <h1>Comics For Sale</h1>
          <List result={Comics().data.results} onSelect={this.handleSelection} />
          <button onClick={this._onButtonClick}>Checkout</button>
          {this.state.showComponent ?
           <Pay /> :
           null
        }
        </div>
      </div>
    );
  }

  handleSelection(index) {
    this.setState({
      selected: this.state.selected.concat(index)
    });
  }

}



export default App;