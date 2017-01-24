// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Parent Component
var Parent = require("./components/register");

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<register />, document.getElementById("app"));