import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Portfolio - Past Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <CardItem
              src="images/img-9.jpg"
              text="React Project: GardenShare Application"
              label="Featured"
              path="/projects"
            />
            <CardItem
              src="images/img-2.jpg"
              text="JavaScript Project: 'What's for Dinner?' "
              label="Food/Drink"
              path="/projects"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src="images/img-9.jpg"
              text="React Project: GardenShare Application"
              label="Featured"
              path="/projects"
            />
            <CardItem
              src="images/img-2.jpg"
              text="JavaScript Project: 'What's for Dinner?' "
              label="Food/Drink"
              path="/projects"
            />
            <CardItem
              src="images/img-2.jpg"
              text="JavaScript Project: 'What's for Dinner?' "
              label="Food/Drink"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
