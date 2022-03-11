import React, { Component } from "react";
import QuoteAndAuthor from "./components/quoteAndAuthor";
import ButtonsAndIcons from "./components/buttonsAndIcons";
import "./style.css";

// Random quotes, author & colors:
const quotes = [
  {
    quote:
      "Life is not about getting and having, it is about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote: "Your time is limited, so do not waste it living someone else life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    quote:
      "I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote: "Whether you think you can or you think you can not, you are right.",
    author: "Henry Ford",
  },
  {
    quote:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  {
    quote:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Certain things catch your eye, but pursue only those that capture the heart.",
    author: " Ancient Indian Proverb",
  },
  {
    quote: "Believe you can and you are halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Everything you have ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote:
      "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown",
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
  },
  {
    quote: "I did not fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: " Albert Einstein",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote:
      "A truly rich man is one whose children run into his arms when his hands are empty.",
    author: "Unknown",
  },
  {
    quote:
      "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren",
  },
  {
    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  {
    quote: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "It is not the years in your life that count. It is the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

const colors = [
  "#16a085",
  "#27ae60",
  "#f39c12",
  "#e74c3c",
  "#FB6964",
  "#77B1A9",
  "#73A857",
  "#73A857",
  "#73A857",
  "#73A857",
];

var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
var randomColorIndex = Math.floor(Math.random() * colors.length);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: colors[randomColorIndex],
      newQuote: {
        quote: quotes[randomQuoteIndex].quote,
        author: quotes[randomQuoteIndex].author,
      },
    };
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote() {
    randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    randomColorIndex = Math.floor(Math.random() * colors.length);
    let newColor = colors[randomColorIndex];
    let quote = quotes[randomQuoteIndex].quote;
    let author = quotes[randomQuoteIndex].author;
    this.setState({
      newColor: newColor,
      newQuote: {
        quote: quote,
        author: author,
      },
    });
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{ backgroundColor: this.state.newColor }}
          id="quote-container"
        >
          <div id="quote-box">
            <QuoteAndAuthor
              newQuote={this.state.newQuote.quote}
              newAuthor={this.state.newQuote.author}
              newColor={this.state.newColor}
            />
            <ButtonsAndIcons
              newColor={this.state.newColor}
              onNewQuote={this.handleNewQuote}
            />
          </div>
          <footer>
            &copy; Developed by{" "}
            <a href="https://codepen.io/new_life/full/wvebydP" target="_blank">
              Paulo Fidalgo
            </a>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
