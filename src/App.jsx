import "./App.css";
import { Component } from "react";
import { StickerList } from "./components/StickerList/StickerList.jsx";
import { Choice } from "./components/Choice/Choice.jsx";
import stickers from "./data/stickers.json";
import { GlobalStyle } from "./GlobalStyles.js";
import { Title, Main } from "./App.js";

class App extends Component {
  state = {
    stickers: stickers,
    choiceAlt: "Click to see",
    choiceSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMi4hapxfeajdTcIOqL02i8wVV97t1V7etvQKkMqurvIWa0Eiy2yh4XzSndAF8w5qnMQ&usqp=CAU",
  };

  showName = (e) => {
    this.setState({ choiceAlt: e.target.alt });
    this.setState({ choiceSrc: e.target.src });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Title>Your stickerpack</Title>
        <Main>
          <Choice name={this.state.choiceAlt} url={this.state.choiceSrc} />
          <StickerList stickers={this.state.stickers} func={this.showName} />
        </Main>
      </div>
    );
  }
}

export default App;
