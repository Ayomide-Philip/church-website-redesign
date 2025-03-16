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

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the default install prompt
  e.preventDefault();
  deferredPrompt = e;

  // Show a custom install button
  const installButton = document.getElementById("install-button");
  if (installButton) {
    installButton.style.display = "block";

    installButton.addEventListener("click", () => {
      // Show the install prompt
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        deferredPrompt = null;
      });
    });
  }
});

export default function Home() {
  return (
    <div>
      <Header />
      <VideoBanner
        title="Welcome To Gateway Baptist Church."
        subtitle="... Community of Grace."
        video="3373659-hd_1920_1080_24fps"
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
