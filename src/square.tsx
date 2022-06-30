import React from "react";

interface PropsSquare {
  // onClick: () => void;
  onClick: VoidFunction;
  value : number;
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
