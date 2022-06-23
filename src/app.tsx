import React from "react";
import ReactDOM from "react-dom";
import {Knot} from "./components/Knot";

const noteDescriptors = [
    {
        color: '#ff0000'
    },
    {
        color: '#00ff00'
    }
];

function render(): void {
    ReactDOM.render(<Knot noteDescriptors={noteDescriptors}/>, document.body);
}

render();