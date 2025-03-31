import Header from "../componet/Header/header";
import Footer from "../componet/Footer/footer";
import VideoBanner from "../componet/Banner/videoBanner";

export default function Teenagers() {
  return (
    <>
      <Header />
      <VideoBanner
        video="mission-video"
        title="The Teenagers Ministry"
        subtitle="...Learn more about the Teenagers Ministry."
      />
      <Footer />
    </>
  );
}
