import React from "react";
import ReactDOM from "react-dom";
import {Knot} from "./react/Knot";

function render(): void {
    ReactDOM.render(<Knot/>, document.body);
}

render();