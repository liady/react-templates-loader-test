import React from "react/addons";
import emptyTemplate from "./Empty.rt";

var Empty = React.createClass({
    render : emptyTemplate
});

React.render(<Empty/>, document.getElementById('app'));