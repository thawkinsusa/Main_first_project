import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import CharDisplayPrimary from './components/CharDisplayPrimary'
import CharDisplaySecondary from './components/CharDisplaySecondary';
import HealthBar from './components/HealthBar'
import axios from 'axios';
import Footer from './components/Footer'
class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      charactersTwo: [],

      i: 0,
      iTwo: 0,



    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevTwo = this.handlePrevTwo.bind(this);
    this.handleNextTwo = this.handleNextTwo.bind(this);
    this.deleteHero = this.deleteHero.bind(this)
  }

  componentDidMount() {
    axios
      .get('/api/char', '/api/charactersTwo')
      .then(res => {
        console.log('res', res)
        this.setState({ characters: res.data.characters })
        this.setState({ charactersTwo: res.data.charactersTwo })
      })

      .catch(err => console.log('err', err))
  }

  editHeroTwo = (updatedCharacter, id) => {
    let { name, attack, health, armor } = updatedCharacter
    axios
      // grab newRating off of controller
      .put(`/api/characters/${id}`, { name, attack, health, armor })
      .then(res => {
        this.setState = ({ charactersTwo: res.data })
      })
  };
 


  deleteHero = id => {
    axios
      .delete(`/api/charactersTwo/${id}`)
      .then(res => {
        console.log('res', res);
        this.setState({ charactersTwo: res.data })
          ;

      })
  };


  handleNext() {
    if (this.state.i < (this.state.characters.length -1)) {
      this.setState({ i: this.state.i + 1 });
    } else if (this.state.i === this.state.characters.length -1) {
      this.setState({ i: 0 })
    }
  }

  handlePrev() {
    if (this.state.i > 0)  {
      this.setState({ i: this.state.i - 1 });
    } else if (this.state.i === 0) {
      this.setState({ i: this.state.characters.length -1 })
    }
  }
  handleNextTwo() {
    if (this.state.iTwo < (this.state.charactersTwo.length -1)) {
      this.setState({ iTwo: this.state.iTwo + 1 });
    } else if (this.state.iTwo === this.state.charactersTwo.length -1) {
      this.setState({ iTwo: 0 })
    }
  }

  handlePrevTwo() {
    if (this.state.iTwo > 0)  {
      this.setState({ iTwo: this.state.iTwo - 1 });
    } else if (this.state.iTwo === 0) {
      this.setState({ iTwo: this.state.charactersTwo.length -1 })
    }
  }
  

  render() {

    return (
      <div>

        <div className="App">
          <Header  />
          <CharDisplayPrimary  deleteHero={this.deleteHero} charactersTwo={this.state.charactersTwo} iTwo={this.state.iTwo} handleNextTwo={this.handleNextTwo} handlePrevTwo={this.handlePrevTwo} editHeroTwo={this.editHeroTwo} />
          <HealthBar charactersTwo={this.state.charactersTwo} iTwo={this.state.iTwo}/>
          <CharDisplaySecondary deleteHero={this.deleteHero} characters={this.state.characters} handleNext={this.handleNext} handlePrev={this.handlePrev} i={this.state.i} />
        </div>
        <Footer />
      </div>
    );
  }
}



export default App;
