import React from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";

let correctGuesses = 0;
let maxScore = 0;
let clickMessage = "Click on the character to earn a point. Lose when you click on the same character twice!"

// Randomising images
function shuffle(arr) {
  for (let a = arr.length - 1; a > 0; a--) {
    let b = Math.floor(Math.random() * (a + 1));
    arr[a] = arr[b];
  };
  return arr
}

class App extends React.Component {

  // Setting the state
  state = {
    cards,
    correctGuesses,
    maxScore,
    clickMessage
  };

  setClicked = id => {
    const cards = this.state.cards;
    const clickedCard = cards.filter(match => match.id === id);

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
      this.cardShuffle();
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

  cardShuffle = () => {
    this.setState({ cards: shuffle(cards) })
  };

  render() {
    return (
      <Wrapper>
        <Header>Star Wars Clicker Game </Header>

        <h3 className="scores">
          {this.state.clickMessage}
        </h3>

        <h3 className="scores card-header">
          Personal best: {this.state.maxScore}
        </h3>
        <div className="container">
          <div className="row">
            {this.state.cards.map(match => (
              <Card
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
              />
            ))}
          </div>

        </div>

      </Wrapper>
    )
  }
}

export default App;
