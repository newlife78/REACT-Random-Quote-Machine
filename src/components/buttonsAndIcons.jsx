import React, { Component } from "react";
import "../style.css";

class ButtonsAndIcons extends React.Component {
  render() {
    const { newColor, onNewQuote } = this.props;

    return (
      <div className="buttons">
        <div id="icons">
          <a
            type="btn"
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_blank"
          >
            <i className="fa fa-twitter-square" style={{ color: newColor }}></i>
          </a>
          <a
            type="btn"
            id="facebook-quote"
            href="https://www.facebook.com/sharer/sharer.php?u=codepen.io/InicianteGit1/full/eGvvBp/"
            target="_blank"
          >
            <i
              className="fa fa-facebook-square"
              style={{ color: newColor }}
            ></i>
          </a>
        </div>
        <button
          onClick={onNewQuote}
          type="btn"
          style={{ backgroundColor: newColor }}
          id="new-quote"
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default ButtonsAndIcons;
