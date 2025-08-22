import { Component } from "react";
import { Item, Image } from "./Sticker";

export class Sticker extends Component {
  render() {
    return (
      <Item>
        <Image
          src={this.props.url}
          alt={this.props.name}
          onClick={this.props.func}
        />
      </Item>
    );
  }
}
