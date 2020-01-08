//Renders game component to start quiz
//import Card.js
// import Button.js
// using end points
//Axios call
import React, { useCallback } from "react";
import { Switch, Route } from 'react-router-dom';
import CelebCard from './Card';
import Button from './Button';

const info = {
	"id": 5,
	"celebname": "Freddy Heineken",
	"image_url": "https://specials-images.forbesimg.com/imageserve/5d8e22cc6de3150009a54b53/960x0.jpg",
	"factoid": "Dutch beer brewer (Heineken).",
	"birthyear": 1923,
	"alive": 0
}

export default function Game() {
    let buttonValue;
    console.log("Button Value: " + buttonValue);

    return (
        <div>
            <CelebCard args={info} />
            <div className="buttonDiv">
                <Button value="false" text="Dead" check={info.alive} onClick={event => buttonValue = this.value} />
                <Button value="true" text="Alive" check={info.alive} onClick={event => buttonValue = this.value}/>
            </div>
            
        </div>
    );
}


