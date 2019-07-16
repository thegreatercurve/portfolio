import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Hi there</h1>
          <h2>My name is John Flockton <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">🙂</span></h2>
        </header>
        <main>
          <p>I'm a Front-End Developer from London, who prides himself on creativity, quality and performance.</p>
          <ul className="list">
            <li className="btn">
              <a href="https://github.com/thegreatercurve" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li className="btn">
              <a href="https://codepen.io/thegreatercurve" target="_blank" rel="noopener noreferrer">Codepen</a>
            </li>
            <li className="btn">
              <a href="https://docs.google.com/document/d/1n5wvUVb-PtHu3qJV8O9OMoMjjy3RypSsWuwttZ0SA6g/export?format=pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </main>
        <footer>
          <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">💻</span>
          <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">😍</span>
        </footer>
      </div>
    );
  }
}

export default App;
