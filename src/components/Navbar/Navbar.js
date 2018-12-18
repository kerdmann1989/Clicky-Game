import React from "react";
import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = (props) => (
  
  <div class="container-fluid-nav">
    <nav class="navbar navbar-light bg-light text-center">
      <div class="navbar-text">
        Score: {props.currentScore}&nbsp;&nbsp;|&nbsp;&nbsp;High Score: {props.highScore} 
      </div>
    </nav>
</div>

);

export default Navbar;