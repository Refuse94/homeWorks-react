import logo from "./logo.svg";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Tome</p>
        <img
          src={"https://c.tenor.com/7rMJZKO5CYYAAAAC/baby-yoda-hi.gif"}
          alt={""}
        />
      </header>
    </div>
  );
};
