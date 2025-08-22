import { Component } from "react";
import { Sticker } from "../Sticker/Sticker.jsx";
import { List } from "./StickerList.js";

export class StickerList extends Component {
  render() {
    return (
      <List>
        {this.props.stickers.map((sticker, index) => (
          <Sticker
            key={index}
            url={sticker.img}
            name={sticker.label}
            func={this.props.func}
          />
        ))}
      </List>
    );
  }
}
