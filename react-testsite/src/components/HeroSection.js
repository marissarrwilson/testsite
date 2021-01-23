import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Headshot from "../images/headshot.jpeg";

function HeroSection() {
  return (
    <div className="hero-container">

      <img src={Headshot} width="500" alt="headshot"/>

      <img src="/images/img-1.jpg" alt="background" />

      <h1>Marissa Wilson</h1>
      <br></br>
      <p>
        Hello World! I am bilingual (French and English) full-stack web
        developer with experience working with HTML/CSS, JavaScript and React. I
        am Interested in refining my skills in web design and deepening my
        knowledge in back-end web development. I'm Looking to utilize my
        background in environmental science (BSc) to create sustainable
        solutions through programming. I am most effective at problem-solving
        and visualizing a themed UI to develop user-friendly web applications.
        I'm known among coworkers for good communication, work ethic, creativity
        and attention to detail.
      </p>
      <br></br>
      <p>
        I am currently seeking an opportunity where I can learn and delve deeper
        into programming languages such as JavaScript, React and Python.
      </p>
      <br></br>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          CONTACT <i className="far fa-comment-alt" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
