import React from "react";
import ReactDOM from "react-dom";

const reactElement = React.createElement("h1", { id: "title" }, "Hello World");
console.log(heading);

var reactRoot = ReactDOM.createRoot(document.getElementById("root-react"));
reactRoot.render(reactElement);