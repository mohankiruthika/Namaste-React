/*
<div id="parent">
    <div id="child">
        <h1>Im H1 tag</h1>
        <h2>Im H2 tag</h2>
    </div>
    <div id="child2">
        <h1>Im H1 tag</h1>
        <h2>Im H2 tag</h2>
    </div>
</div>
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child"},
[React.createElement("h1", {}, "Hey this is Krithi"), React.createElement("h2", {}, "Im H2 tag")]),
React.createElement("div", {id:"child2"},
[React.createElement("h1", {}, "Im H1 tag"), React.createElement("h2", {}, "Im H2 tag")])]);
console.log(parent);
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);