import Header from "../componet/Header/header";
import Footer from "../componet/Footer/footer";
import VideoBanner from "../componet/Banner/videoBanner";
import ContentSection from "../componet/History/contentSection";
export default function History() {
  return (
    <>
      <Header />
      <VideoBanner
        video="history-video"
        title="The Church In the Historical Perspective."
        subtitle="Learn more about our church history."
      />
      <ContentSection />
      <Footer />
    </>
  );
}
