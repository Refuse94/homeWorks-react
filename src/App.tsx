import logo from "./logo.svg";
import "./App.css";

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Tome</p>
        <div>
          <img
            src={"https://c.tenor.com/7rMJZKO5CYYAAAAC/baby-yoda-hi.gif"}
            alt={""}
          />
          <img
            src={
              "https://i.pinimg.com/originals/b5/c9/fa/b5c9fa0621cba99bbc1b5ee2f62802c2.gif"
            }
            alt={""}
          />
        </div>
      </header>
    </div>
  );
};
