import React, { Component } from "react";
import "../style.css";

class QuoteAndAuthor extends React.Component {
  render() {
    const { newQuote, newAuthor, newColor } = this.props;

    return (
      <div id="quoteandauthor" style={{ color: newColor }}>
        <div id="text">
          <i className="fa fa-quote-left">&nbsp;&nbsp;</i>
          {newQuote}&nbsp;&nbsp;
          <i className="fa fa-quote-right"></i>
        </div>
        <div id="author">-&nbsp;{newAuthor}</div>
      </div>
    );
  }
}

export default QuoteAndAuthor;
