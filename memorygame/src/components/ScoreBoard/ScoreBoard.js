import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = props => <h1 className="score"> Score: {props.score} | Top Score: {props.topScore}</h1>;

export default ScoreBoard;
