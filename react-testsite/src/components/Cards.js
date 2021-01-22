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
              src="images/getgrowing.png"
              text="React Project: Get Growing 🌱"
              label="Featured"
              path="/projects"
            />
            <CardItem
              src="images/wfd4.jpg"
              text="JavaScript Project: What's for Dinner? 🍜"
              label="Food/Drink"
              path="/projects"
            />
          </ul>
          <ul className="cards__item">
            <CardItem
              src="images/notetaker.png"
              text="React Project: Note Taker 📝"
              label="Featured"
              path="/projects"
            />
            <CardItem
              src="images/employeedir.png"
              text="React Project: User Directory"
              label="Food/Drink"
              path="/projects"
            />
            <CardItem
              src="images/RSsearch.png"
              text="JavaScript Project: Recipe Share "
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
