import React from "react";
import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = (props) => (
  
  <div class="container">
    <nav class="navbar navbar-light bg-light">
      <span class="center navbar-text">
        Score: {props.currentScore}  |  High Score: {props.highScore}  |  {props.rightWrong} 
      </span>
    </nav>
</div>

);

export default Navbar;