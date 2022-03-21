import logo from "./logo.svg";
import "./App.css";

function App() {
  const styles = {
    border: "1px solid gray",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    margin: "30px auto",
    maxWidth: "400px",
    width: "100vw",
  };

  return (
    <div className="App">
      <div style={styles}>
        <h1 style={{ color: "turquoise" }}>안녕하세요!</h1>
        <hr style={{ width: "100%" }}></hr>
        <p style={{ textAlign: "left" }}>이름을 입력해주세요.</p>
        <input type="text" />
      </div>
    </div>
  );
}

export default App;
