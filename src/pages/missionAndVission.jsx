import VideoBanner from "../componet/Banner/videoBanner";
import Footer from "../componet/Footer/footer";
import Header from "../componet/Header/header";
import MissionSection from "../componet/MissionandVission/missionSection";

export default function Missionandvission() {
  return (
    <>
      <Header />
      <VideoBanner
        video="mission-video"
        title="The Mission and Vision of the Church"
        subtitle="The Mission and Vision of the Church"
      />
      <MissionSection />
      <Footer />
    </>
  );
}
