import React from "react";
import Header from "../componet/Header/header";
import VideoBanner from "../componet/Banner/videoBanner";
export default function Home() {
  return (
    <div>
      <Header />
      <VideoBanner title="Welcome To Gateway Baptist Church." subtitle="... Community of Grace." />
    </div>
  );
}
