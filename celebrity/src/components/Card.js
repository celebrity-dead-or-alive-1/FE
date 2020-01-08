//Celebrity Image, 1 factoid
import React from "react";

export default function CelebCard(data) {
    console.log("Data: " + data);
    console.log("Data.image_url: " + data.image_url);
    console.log("data.args.celebname: " + data.args.celebname);
  return (
    <div className="cardDiv">
      <div>
        <img src={data.args.image_url} alt={data.args.celebname}/>
      </div>
      <div>
        <h3>{data.args.celebname}, b.{data.args.birthyear}</h3>
        <h4>{data.args.factoid}</h4>
      </div>
    </div>
  );
}
//Props in Card.js
//<Timer duration={duration} timeoutFn={checkAnswerFn(true, false)} />

