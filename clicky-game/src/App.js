import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";

let correctGuesses = 0;
let maxScore = 0;
let clickMessage = "Click on the character to earn a point. Lose when you click on the same character twice!"

class App extends Conponent {

  // Setting the state
  state = {
    matches,
    correctGuesses,
    maxScore,
    clickMessage
  };

  setClicked = id => {
    const matches = this.state.matches;
    const clickedMatch = matches.filter(match => match.id === id);

    // Game over if user has already selected the character in this game
    if (clickedMatch[0].clicked) {
      console.log("Correct Guesses:" + correctGuesses);
      console.log("Maximum Score:" + maxScore);

      correctGuesses = 0;
      clickMessage = "Hmm.. You've already clicked this character!"

      for (var i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      };

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ matches });
    }

    // If character has not been selected before
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
