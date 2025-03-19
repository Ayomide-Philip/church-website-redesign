import VideoBanner from "../componet/Banner/videoBanner";
import Footer from "../componet/Footer/footer";
import Header from "../componet/Header/header";
import LiveVideo from "../componet/Joinus/livevideo";

export default function JoinUs() {
  return (
    <>
      <Header />
      <VideoBanner
        video="3373659-hd_1920_1080_24fps"
        title="Join Us Today for Church Service"
      />
      <LiveVideo />
      <Footer />
    </>
  );
}
