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
      correctGuess: true,
      displayOrder: shuffleArray(friends)
  };

  clickedFriend = id => {
    // shuffle the displayOrder
    const displayOrder = shuffleArray(this.state.displayOrder);
    
    // Find friends with an id equal to the id clicked
    const friend = this.state.friends[id];
    
    //create a copy of the friend array so we can update the guessed state
    let friends = this.state.friends;
    
    //if the friend has not been clicked set the correct Guess to true
    let correctGuess = false;
    if (!friend.guessed) {
      correctGuess = true;
      //update the guessed flag on the friend id
      friends[id].guessed = true;
    }


    // Set this.state.friends equal to the new friends array
    this.setState({ friends, correctGuess, displayOrder });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          message={'Click an image to play!'}
          score={0}
          topScore={0}
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
