import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">Coded by Cigdem B</footer>
    </div>
  );
}
