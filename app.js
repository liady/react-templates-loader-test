import React from "react/addons";
import template from "./Item.rt";

var Item = React.createClass({
    render : template
});

React.render(<Item/>, document.getElementById('app'));