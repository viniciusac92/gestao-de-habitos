import "./App.css";
import GlobalStyle from "./style/Global";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
        <GlobalStyle />
      </header>
    </div>
  );
}

export default App;
