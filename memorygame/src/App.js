import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      friends,
      displayOrder: shuffleArray(friends),
      score: 0,
      topScore: 0,
      message: "Click any pic to begin!"
  };

  clickedFriend = id => {
    // shuffle the displayOrder
    const displayOrder = shuffleArray(this.state.displayOrder);
    
    // Find friends with an id equal to the id clicked
    const friend = this.state.friends.find(friend => (friend.id === id));
    
    //create a copy of the friend array so we can update the guessed state
    let currentFriends = this.state.friends;
    
    let score = this.state.score;
    let topScore = this.state.topScore;
    let message = '';
    //if the friend has not been clicked set the correct Guess to true
    
    if (!friend.guessed) {
      //set win message
      message = "Good job! You guessed correctly!";
      //increment the score
      score++;
      //update topScore if this is the new topScore
      if (topScore < score)
        topScore = score;
      //update the guessed flag on the friend id
      currentFriends.find(friend => (friend.id === id)).guessed = true;
    }
    else {
      message = "You guessed incorrectly! Click any pic to start a new round.";
      //reset the guessed flag
      currentFriends.forEach(friend =>(friend.guessed = false));
      //reset the score
      score = 0;
    }


    // Set this.state.friends equal to the new friends array
    this.setState({ currentFriends, displayOrder, score, topScore, message });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.displayOrder.map(friend => (
            <FriendCard
              clickedFriend={this.clickedFriend}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
