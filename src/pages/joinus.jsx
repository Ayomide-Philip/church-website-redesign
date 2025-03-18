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
// src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fgatewaybaptist.church.33%2Fvideos%2F1069831131850092%2F&show_text=false&width=560&t=0"
