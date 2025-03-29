import ChildrenPage from "../componet/Children/childrenPage";
import Footer from "../componet/Footer/footer";
import Header from "../componet/Header/header";
import VideoBanner from "../componet/Banner/videoBanner";

export default function Children() {
  return (
    <>
      <Header />
      <VideoBanner
        video="mission-video"
        title="The Children Ministry"
        subtitle="...The Light of the World."
      />
      <ChildrenPage />
      <Footer />
    </>
  );
}
