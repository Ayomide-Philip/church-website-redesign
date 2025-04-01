import Header from "../componet/Header/header";
import Footer from "../componet/Footer/footer";
import VideoBanner from "../componet/Banner/videoBanner";
import TeenagerWelcome from "../componet/Teenager/teenagerWelcome";
import TeenagerLeaders from "../componet/Teenager/teenagerLeaders";
import TeenagerGallary from "../componet/Teenager/teenagerGallary";

export default function Teenagers() {
  return (
    <>
      <Header />
      <VideoBanner
        video="mission-video"
        title="The Teenagers Ministry"
        subtitle="...Learn more about the Teenagers Ministry."
      />
      <TeenagerWelcome />
      <TeenagerLeaders />
      <TeenagerGallary />
      <Footer />
    </>
  );
}
