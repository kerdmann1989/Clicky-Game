import React from "react";
import "./Wrapper.css";

const Wrapper = props =>
<div class="container">
<div className="wrapper">{props.children}</div>
</div>
export default Wrapper;
