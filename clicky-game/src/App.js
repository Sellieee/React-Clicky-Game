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

      // If character has not been selected before but user hasn't finished game
    } else if (correctGuesses < 11) {
      clickedMatch[0].clicked = true;
      correctGuesses++;
      clickMessage = "Sweet! This one hasn't been clicked yet!"

      // If user beats personal record
      if (correctGuesses > maxScore) {
        maxScore = correctGuesses;
        this.setState({ maxScore });

      } else {
        clickedMatch[0].clicked = true;
        correctGuesses = 0;

        // Restart the game 
        clickMessage = "Congrats! You're through to the next round!";
        maxScore = 12;
        this.setState({ maxScore });

      }
      // Set all cards back to unclicked
      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    }
  };

  render() {
    return (
      <Wrapper>
        <title>Star Wars Clicker Game</title>

        <h3 className="scores">
          {this.state.clickMessage}
        </h3>

        <h3 className="card-header">
          correctGuesses: {this.state.correctGuesses}
          <br />
          Personal Best: {this.state.maxScore}
        </h3>

        <div className="container">
          <div className="row">
            {this.state.matches.map(match => (
              <MatchCard
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  };
};

export default App;
