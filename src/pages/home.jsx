import React from "react";
import Header from "../componet/Header/header";
import VideoBanner from "../componet/Banner/videoBanner";
import Cta from "../componet/cta";
export default function Home() {
  return (
    <div>
      <Header />
      <VideoBanner
        title="Welcome To Gateway Baptist Church."
        subtitle="... Community of Grace."
      />
      <Cta />
    </div>
  );
}
