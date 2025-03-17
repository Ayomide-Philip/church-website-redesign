import React from "react";
import { Typed } from "react-typed";

function VideoBanner(props) {
  return (
    <div class="video-container">
      <video autoPlay muted loop>
        <source src={`/videos/${props.video}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-overlay">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl pb-2 typing-text">
            {props.title}
          </h1>
          <p class="text-1xl md:text-2xl lg:text-3xl">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoBanner;
