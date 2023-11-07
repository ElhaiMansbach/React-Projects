import Container from "./components/Container.jsx";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Container />
      <img
        className="img-cat"
        src={process.env.PUBLIC_URL + "/git.png"}
        alt="GitHub Logo cat"
      />
    </div>
  );
}

export default App;
