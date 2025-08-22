import { Component } from "react";
import { Title, ChoiceDiv, Image } from "./Choice";

export class Choice extends Component {
  render() {
    return (
      <ChoiceDiv>
        <Image src={this.props.url || "#"} alt={this.props.name} />
        <Title>{this.props.name}</Title>
      </ChoiceDiv>
    );
  }
}
