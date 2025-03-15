import React from "react";
import Header from "../componet/Header/header";
import VideoBanner from "../componet/Banner/videoBanner";
import Cta from "../componet/Home/cta";
import Team from "../componet/Home/team";
import Explore from "../componet/Home/explore";
import Step from "../componet/Home/step";
import Faq from "../componet/Home/faq";
import Contact from "../componet/Home/contact";
import Footer from "../componet/Footer/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <VideoBanner
        title="Welcome To Gateway Baptist Church."
        subtitle="... Community of Grace."
      />
      <Cta />
      <Team />
      <Explore />
      <Step />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
