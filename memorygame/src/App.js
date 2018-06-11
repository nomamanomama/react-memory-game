import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      friends,
      unguessed:friends
  };

  clickedFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const unguessed = this.state.unguessed.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ unguessed });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar 
            message={'Click an image to play!'}
            score={0}
            topScore={0}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            clickedFriend={this.clickedFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
