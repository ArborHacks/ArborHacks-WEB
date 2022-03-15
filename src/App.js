import logo from './images/logo.png';
import AH2022 from './AH2022/AH2022';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <AH2022/>
      </header>
    </div>
  );
}

export default App;
