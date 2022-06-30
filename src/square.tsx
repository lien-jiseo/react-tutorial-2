import React from "react";

export type SquareValue= null | "X" | "O";
interface PropsSquare {
  // onClick: () => void;
  onClick: VoidFunction;
  value : SquareValue;
}
export class Square extends React.Component<PropsSquare> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
