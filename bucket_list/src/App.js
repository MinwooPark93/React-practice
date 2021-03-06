import logo from "./logo.svg";
import "./App.css";

import React from "react";
import BucketList from "./BucketList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="App">
        <BucketList list={this.state.list} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <BucketList />
//     </div>
//   );
// }

export default App;
