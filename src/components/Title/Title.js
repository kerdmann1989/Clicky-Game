import React from "react";
import "./Title.css";

const Title = props => (
    <div className="container">
    <h1 className="title">{props.children}</h1>
    {props.rightWrong}
    </div>
    )



export default Title;
