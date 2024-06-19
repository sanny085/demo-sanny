import logo from "./logo.svg";
import "./App.css";
import Cricket from "./bat_ball.jpg";
import CricketBat from "./assets/cricket-bat.webp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="react-icon" />
        <img src={Cricket} className="App-logo" alt="small bat ball" />
        <img src={CricketBat} className="App-logo" alt="bat pic" />
        <img src="/header/dhoni.jpeg" className="App-logo" alt="dhoni pic" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
