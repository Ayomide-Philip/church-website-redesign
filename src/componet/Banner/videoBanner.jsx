import React from "react";

function VideoBanner() {
  return (
    <div class="video-container">
      <video autoPlay muted loop>
        <source src="/videos/3373659-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="video-overlay">
        <div>
          <h1 class="text-6xl">Welcome to Our Church</h1>
          <p class="lead">Join us for worship and community</p>
        </div>
      </div>
    </div>
  );
}

export default VideoBanner;
