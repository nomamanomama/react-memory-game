import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div>
    <span onClick={() => props.clickedFriend(props.id)} className="clicked">
      <div className="card">
        <div className="img-container">

          <img alt={props.name} src={props.image} />

        </div>
      </div>
    </span>
  </div>
);

export default FriendCard;
