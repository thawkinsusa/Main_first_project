import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/CharDisplayPrimary'
import CharDisplaySecondary from './components/CharDisplaySecondary';

import axios from 'axios';
class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      charactersTwo:[],
      
      i: 0,
      iTwo: 0

    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevTwo = this.handlePrevTwo.bind(this);
    this.handleNextTwo = this.handleNextTwo.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/char', '/api/charactersTwo')
      .then(res => {
        console.log('res', res)
        this.setState({ characters: res.data })
        this.setState({charactersTwo: res.data})
      })
    
      .catch(err => console.log('err', err))
  }

  editHeroesTwo = (name, heroes) => {
    axios
      // grab newRating off of controller
      .put(`/api/chars/${heroes}?newRating${name}`)
      .then(res => {
        this.setState = ({ charactersTwo: res.data })
      })
  };


  handleNext() {
    if (this.state.i < 3) {
      this.setState({ i: this.state.i + 1 });
    } else if (this.state.i = 4 ) {
      this.setState({ i: this.state.i = 0 })
    }
  }

  handlePrev() {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    } else if (this.state.i === -1) {
      this.setState({ i: this.state.i = 0 })
    }
  }
  handleNextTwo() {
    if (this.state.iTwo < 3) {
      this.setState({ iTwo: this.state.iTwo + 1 });
    } else if (this.state.iTwo = 4 ) {
      this.setState({ iTwo: this.state.iTwo = 0 })
    }
  }

  handlePrevTwo() {
    if (this.state.iTwo > 0) {
      this.setState({ iTwo: this.state.iTwo - 1 });
    } else if (this.state.iTwo === -1) {
      this.setState({ iTwo: this.state.iTwo = 0 })
    }
  }

  render() {
    return (
      <div>

      <div className="App">
        <Header />
        <Form charactersTwo={this.state.charactersTwo}  iTwo={this.state.iTwo} handleNextTwo={this.handleNextTwo} handlePrevTwo={this.handlePrevTwo} editHeroesTwo={this.editHeroesTwo} />
        <CharDisplaySecondary characters={this.state.characters} handleNext={this.handleNext} handlePrev={this.handlePrev} i={this.state.i}/>
      </div>
      
      <body>

      </body>
      </div>
    );
  }
}



export default App;
