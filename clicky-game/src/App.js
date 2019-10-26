import React from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

let correctGuesses = 0;
let maxScore = 0;
let clickMessage = "Click on the character to earn a point. Lose when you click on the same character twice!"

class App extends React.Component {

  // Setting the state
  state = {
    cards: 0,
    correctGuesses: 0,
    maxScore: 0,
    clickMessage: ""
  };

  setClicked = id => {
    const cards = this.cards.cards;
    const clickedCard = cards.filter(cards => cards.id === id);

    // Game over if user has already selected the character in this game
    if (clickedCard[0].clicked) {
      console.log("Correct Guesses:" + correctGuesses);
      console.log("Maximum Score:" + maxScore);

      correctGuesses = 0;
      clickMessage = "Hmm.. You've already clicked this character!"

      for (var i = 0; i < cards.length; i++) {
        cards[i].clicked = false;
      };

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ cards });

      // If character has not been selected before but user hasn't finished game
    } else if (correctGuesses < 11) {
      clickedCard[0].clicked = true;
      correctGuesses++;
      clickMessage = "Sweet! This one hasn't been clicked yet!"

      // If user beats personal record
      if (correctGuesses > maxScore) {
        maxScore = correctGuesses;
        this.setState({ maxScore });

      } else {
        clickedCard[0].clicked = true;
        correctGuesses = 0;

        // Restart the game 
        clickMessage = "Congrats! You're through to the next round!";
        maxScore = 12;
        this.setState({ maxScore });

      }
      // Set all cards back to unclicked
      for (let i = 0; i < cards.length; i++) {
        cards[i].clicked = false;
      }

      this.setState({ cards });
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
            {this.state.cards.map(cards => (
              <Card
                setClicked={this.setClicked}
                id={cards.id}
                key={cards.id}
                image={cards.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  };
};

export default App;
