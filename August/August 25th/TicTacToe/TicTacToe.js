import React from "react";
import "TicTacToe.css";

function TicTacToe() {
    return (
        <div>
            <Square />
        </div>
    )
}

export default TicTacToe;

function Square(props) {
    return (<button className="square" onClick={props.onClick}>
    {props.value}
    </button>
    );
}